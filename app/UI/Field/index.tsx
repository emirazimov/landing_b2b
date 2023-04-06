import React, { FC, useEffect, useRef, useState } from "react";
import InputMask from 'react-input-mask';
import Cleave from "cleave.js/react";

//Types
import { FieldProps } from "./field.types";

//Context
import { useModal } from "@/context/modalOpenContext";

export const Field: FC<FieldProps> = React.memo(({
  className,
  type = "text",
  onChange = () => null,
  name,
  value,
  placeholder,
  disabled,
  required = false,
  ref,
  errorRes = false
}) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [error, setError] = useState(errorRes);
  const [message, setMessage] = useState(placeholder + " is required");
  const { isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setActive(false);
      setError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query?.length) {
      setMessage(placeholder + " is required")
    }
  }, [type, query]);

  const id = name?.split(" ").join("");

  return (
    <div className="relative flex flex-col w-full justify-start">
      <label htmlFor={id} className={`absolute opacity-[.5] text-[${query ? "10px" : "13px"}] text-white transition-all duration-300`} style={{ left: 20, top: query ? active ? 0 : 14 : 14 }}>{placeholder}</label>
      <input
        ref={ref}
        id={id}
        name={name}
        aria-label={name}
        value={value || query}
        type={type}
        onFocus={() => setActive(true)}
        onBlur={() => {
          if (!query?.length) {
            setActive(false);
            setError(true);
          } else {
            setActive(true);
            setError(false);
          }
        }}
        className={`${className} border border-1 ${error ? "border-red-500" : "border-transparent"} text-[13px] w-full h-full rounded-lg text-white gray focus:outline-0 px-[20px] z-10rounded-lg py-[15px] max-h-[46px]`}
        disabled={disabled}
        onChange={(e) => {
          onChange(e);
          setActive(e.target.value ? true : false);
          setError(!e.target.value ? true : false);
          setQuery(e.target.value)
        }}
        required={required}
      />
      <p className="text-red-500 text-[13px] mt-2">
        {error ? (
          message
        ) : null}
      </p>
    </div>
  );
});

export const InputMaskFeild: FC<any> = React.memo(({
  onChange = () => null,
  col,
  placeholder,
  month = false,
  name,
}) => {
  const [card, setCard] = useState("");
  const [active, setActive] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(placeholder + " is required");
  const inputCard: any = useRef();
  let firstRender = false;

  const { isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      setCard("");
      setActive(false);
      setError(false);
    }
  }, [isOpen]);

  const handleChange = () => {
    if (col === 3) {
      const cardValue = inputCard.current.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})/);

      inputCard.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]} ${cardValue[2]}${`${
            cardValue[3] ? ` ${cardValue[3]}` : ""
          }`}`;

      const numbers = inputCard.current.value.replace(/(\D)/g, "");
      setCard(numbers);
      onChange(numbers);
    } else {
      const cardValue = inputCard.current.value
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,2})/);

      inputCard.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]}/${cardValue[2]}`;

      const numbers = inputCard.current.value.replace(/(\D)/g, "");
      setCard(numbers);
      onChange(numbers);
    }
  };

  useEffect(() => {
    handleChange();
    
    if (card) {
      setError(false);
    } else if (firstRender) {
      setError(true);
    }
  }, [card]);

  return (
    <div className="relative flex flex-col w-full justify-start">
      <label htmlFor={name} className={`absolute opacity-[.5] text-[${card ? "10px" : "13px"}] text-white transition-all duration-300`} style={{ left: 20, top: card ? active ? 0 : 14 : 14 }}>{placeholder}</label>
      <input
        type="text"
        name={name}
        className="text-[13px] text-white w-full h-full rounded-lg gray focus:outline-0 px-[20px] z-10rounded-lg py-[15px] max-h-[46px]"
        aria-label={name}
        ref={inputCard}
        onFocus={() => setActive(true)}
        onBlur={() => {
          if (!card) {
            setActive(false)
            setError(true);
            firstRender = true;
          } else {
            setActive(true)
          }
        }}
        onChange={(e) => {
          handleChange();
        }}
        required={true}
      />
      <p className="text-red-500 text-[13px] mt-2">
        {error ? (
          message
        ) : null}
      </p>
    </div>
  );
});

export const PhoneInputField: FC<any> = React.memo((props) => {
  const ref: any = useRef(null);
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("Phone is required");
  const { isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      ref.current.props = {}
      ref.current.value = ""
      setActive(false);
      setError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (value) {
      setError(false);
    }
  }, [value]);

  return (
    <div className="relative flex flex-col w-full justify-start">
      <label htmlFor={"phoneField"} className={`absolute opacity-[.5] text-[${active ? "10px" : "13px"}] text-white transition-all duration-300`} style={{ left: 20, top: active ? 0 : 14 }}>Phone</label>
      <InputMask
        ref={ref}
        mask={active ? '(+1) 999 999 9999' : ""}
        id="phoneField"
        name={"phone"}
        value={value}
        aria-label={"phone"}
        onFocus={() => setActive(true)}
        onBlur={() => {
          if (ref.current?.value.replace(/(\D)/g, "") <= 1) {
            setActive(false);
            setError(true);
          } else {
            setActive(true);
            setError(false);
          }
        }}
        className={`border border-1 ${error ? "border-red-500" : "border-transparent"} text-[13px] w-full h-full rounded-lg text-white gray focus:outline-0 px-[20px] z-10rounded-lg py-[15px] max-h-[46px]`}
        onChange={(e) => {
          setActive(ref.current?.value.replace(/(\D)/g, "") > 1 ? true : false);
          setError(ref.current?.value.replace(/(\D)/g, "") > 1 ? true : false);
          setValue(ref.current?.value)
        }}
        required={true}
      ></InputMask>
      <p className="text-red-500 text-[13px] mt-2">
        {error ? (
          message
        ) : null}
      </p>
    </div>
  );
})

export const CardInputField: FC<any> = React.memo((props) => {
  const ref: any = useRef(null);
  const [value, setValue] = useState<any>("");
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("Credit card is required");
  const { isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      ref.current.state.value = ""
      setActive(false);
      setError(false);
    }
  }, [isOpen]);

  return (
    <div className="relative flex flex-col w-full justify-start">
      <label htmlFor={"card"} className={`absolute opacity-[.5] text-[${active ? "10px" : "13px"}] text-white transition-all duration-300`} style={{ left: 20, top: active ? 0 : 14 }}>Credit card</label>
      <Cleave
        //@ts-ignore
        delimiter="-"
        options={{
          creditCard: true,
          onCreditCardTypeChanged: () => null,
        }}
        id="card"
        aria-label="card"
        required
        name="card"
        value={value}
        onFocus={() => setActive(true)}
        ref={ref}
        onBlur={() => {
          if (value) {
            setActive(true);
            setError(false);
          } else {
            setActive(false);
            setError(true);
          }
        }}
        onChange={(e) => {
          setActive(e.target.value.length > 1 ? true : false);
          setError(e.target.value.length > 1 ? true : false);
          setValue(e.target.value);
          props.onChange(ref.current?.value.replace(/(\D)/g, ""));
        }}
        className={`border border-1 ${error ? "border-red-500" : "border-transparent"} text-[13px] w-full h-full rounded-lg text-white gray focus:outline-0 px-[20px] z-10rounded-lg py-[15px] max-h-[46px]`}
      />
      <p className="text-red-500 text-[13px] mt-2">
        {error ? (
          message
        ) : null}
      </p>
    </div>
  );
})