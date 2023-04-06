import React, { FC } from 'react'

//Types
import { ButtonProps } from './button.types'

const Button: FC<ButtonProps> = ({
    children,
    className = "",
    disabled = false,
    onClick,
    type,
}) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button