import React, { FormEvent, useCallback, useMemo, useState } from "react";

//Context
import { useModal } from "@/context/modalOpenContext";

//UI
import Select from "@/app/UI/Select";
import Checkbox from "@/app/UI/Checkbox";
import {
  Button,
  CardInputField,
  Field,
  InputMaskFeild,
  Modal,
  PhoneInputField,
} from "@/app/UI";

const PriceModal = () => {
  const [agree, setAgree] = useState(false);
  const [loader, setLoader] = useState(false);

  const [card, setCard] = useState("");

  const [state, setState] = useState([]);
  const [stateSelect, setStateSelect] = useState({
    code: "AL",
    id: 1,
    name: "Alabama",
  });

  const [city, setCity] = useState([]);
  const [citySelect, setCitySelect] = useState({
    id: 0,
    name: "",
    code: "",
  });

  const [message, setMessage] = useState<{
    type: "success" | "error";
    message: string;
  }>({
    type: "error",
    message: "",
  });

  const { isOpen, setIsOpen } = useModal();

  useMemo(() => {
    const fetch = async () => {
      const states = await import("@/helpers/api").then(
        (module) => module.getStates
      );
      const res = await states();

      setState(res);
    };

    if (isOpen) {
      fetch();
    }
  }, [isOpen]);

  useMemo(() => {
    const fetch = async () => {
      const cities = await import("@/helpers/api").then(
        (module) => module.getCities
      );
      const res = await cities(stateSelect?.id);

      setCity(res);
    };

    if (stateSelect?.id) {
      fetch();
    }
  }, [stateSelect]);

  const close = useCallback(() => {
    setIsOpen("");
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    const fetch = await import("@/helpers/api").then(
      (module) => module.payment
    );
    const helper = await import("../../price.helper").then(
      (module) => module.getPaymentInfo
    );

    const body: any = {
      ...helper(e),
      city: citySelect.id,
      state: stateSelect.id,
    };

    if (body) {
      setLoader(true);

      await fetch(body)
        .then((res) => {
          console.log(res);
          setLoader(false);
          setMessage({
            type: "success",
            message: "Payment was successful",
          });
          setTimeout(() => {
            close();
            setMessage({
              type: "success",
              message: "",
            });
            e.target.reset();
          }, 3000);
        })
        .catch((err) => {
          setLoader(false);
          setMessage({
            type: "error",
            message: err.message
              ? err.message
              : "The service is temporarily down. Try again later or contact us.",
          });
          setTimeout(() => {
            setMessage({
              type: "error",
              message: "",
            });
          }, 3000);
        });
    }
  };

  return (
    <Modal
      load={loader}
      title="Billing information"
      message={message.message}
      type={message.type}
      modalType="pricing"
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[10px]">
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[5px]">
          <Field
            name="firstName"
            type="text"
            placeholder="First name"
            required={true}
          />
          <Field
            name="lastName"
            type="text"
            placeholder="Last name"
            required={true}
          />
        </div>
        <Field
          name="companyName"
          type="text"
          placeholder="Company name"
          required={true}
        />
        <Field
          name="companyWebsite"
          type="text"
          placeholder="Company website"
          required={true}
        />
        <Field name="email" type="email" placeholder="Email" />
        <PhoneInputField
          name="phone"
          type="phone"
          placeholder="Phone number"
          required={true}
        />
        <Field name="address" type="text" placeholder="Address" />
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[5px]">
          <Select defaultOption="State" onChange={setStateSelect} arr={state} />
          <Select defaultOption="City" onChange={setCitySelect} arr={city} />
        </div>

        <Field name="zip" type="text" placeholder="Zip" required={true} />

        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[5px]">
          <div className="w-2/4">
            <CardInputField
              name="number"
              type="number"
              placeholder="number"
              required={true}
              onChange={setCard}
            />
          </div>
          <div className="w-1/4">
            <InputMaskFeild name="yearMonth" placeholder="Expiration date" />
          </div>

          <div className="w-1/4">
            <InputMaskFeild name="cvc" placeholder="CVV / CVC" col={3} />
          </div>
        </div>
        <Checkbox
          name="agree"
          label="I agree that the $599 special is non-refundable"
          className="text-sm font-medium flex items-center"
          check={agree}
          setCheck={setAgree}
        />
        <div className="flex justify-center px-0 md:px-10 gap-2">
          <Button
            onClick={close}
            className={`flex bg-transparent w-full border-2 justify-center py-[10px] px-[30px] text-sm font-medium items-center gap-[10px] w-auto rounded-[30px] transition duration-500`}
          >
            <span>Cancel</span>
          </Button>
          <Button
            disabled={!agree}
            className={`flex blue w-full justify-center py-[10px] px-[30px] text-sm font-medium items-center gap-[10px] w-auto rounded-[30px] transition duration-500`}
          >
            <span>Pay $599.00</span>
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default PriceModal;
