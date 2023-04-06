export interface CheckboxProps {
    id?: string;
    value?: string;
    label?: string;
    className?: string;
    check?: boolean;
    setCheck?: (event: boolean) => void;
    name?: string;
};