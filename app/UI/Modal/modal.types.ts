export interface ModalProps {
    children: JSX.Element;
    title: string;
    load?: boolean;
    message?: string;
    type?: "error" | "success";
    modalType?: "contact" | "pricing";
}