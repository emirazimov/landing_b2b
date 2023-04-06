export interface FieldProps {
    name?: string;
    value?: string | number;
    onChange?: (e: any) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    type?: string;
    required?: boolean;
    ref?: any;
    errorRes?: boolean;
}

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}