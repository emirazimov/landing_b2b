import { createContext, useCallback, useContext } from "react";

export const ModalOpenContext = createContext<any>({
    isOpen: "" as "contact" | "pricing",
    setIsOpen: () => {}
});

export const useModal = () => {
    const { isOpen, setIsOpen } = useContext(ModalOpenContext);

    const handleOpen = useCallback((type: string) => {
        setIsOpen(type)
    }, [isOpen]);

    return { isOpen, setIsOpen: handleOpen };
};