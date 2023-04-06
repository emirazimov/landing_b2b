import React, { FC } from 'react';

//Types
import { CheckboxProps } from './checkbox.types';

const Checkbox: FC<CheckboxProps> = ({ 
    id = "styled-checkbox-1",
    value = "value1",
    label,
    className,
    check = false,
    name,
    setCheck = (e: boolean) => null
}) => {
    return (
        <div className={className}>
            <input 
                name={name} 
                className={`styled-checkbox`} 
                onClick={() => setCheck(!check)} 
                checked={check} 
                id={id} 
                type="checkbox" 
                value={check ? "true" : "false"} 
                required 
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;