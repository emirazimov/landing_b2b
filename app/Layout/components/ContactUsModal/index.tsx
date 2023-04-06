import React, { FormEvent, useCallback, useState } from 'react';

//Context
import { useModal } from '@/context/modalOpenContext';

//UI
import { Button, Field, Modal, PhoneInputField } from '@/app/UI';

const ContactUsModal = () => {
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        message: string;
    }>({
        type: "error",
        message: "",
    });

    const { isOpen, setIsOpen } = useModal();

    const close = useCallback(() => {
        setIsOpen("");
    }, [isOpen]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const helper = await import('../../helper').then(module => module.getFeedBackInfo);
        const fetch = await import('@/helpers/api').then(module => module.sendFeedback);

        const body: Record<string, string> = helper(e);

        if (Object.keys(body).length === 6) {
        setLoader(true);

        await fetch(body)
            .then((res) => {
            setLoader(false);
            setMessage({
                type: "success",
                message: "Successfully sent",
            });
            setTimeout(() => {
                close();
                setMessage({
                type: "success",
                message: "",
                });
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
            title="Contact us"
            message={message.message}
            type={message.type}
            modalType="contact"
        >
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-[10px]"
            >
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
                    name="businessName"
                    type="text"
                    placeholder="Company name"
                    required={true}
                />
                <PhoneInputField
                    name="phone"
                    type="phone"
                    placeholder="Phone number"
                    required={true}
                />
                <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    required={true}
                />
                <Field
                    name="message"
                    type="text"
                    placeholder="Message"
                    required={true}
                />

                <div className="flex justify-center gap-[10px]">
                    <Button
                        disabled={loader}
                        className={`flex blue justify-center text-white py-[10px] px-[30px] text-sm font-medium items-center gap-[10px] w-auto rounded-[30px] transition duration-500`}
                    >
                        <span>Submit</span>
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default ContactUsModal;