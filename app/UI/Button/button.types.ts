export interface ButtonProps { 
    children: JSX.Element | string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
};