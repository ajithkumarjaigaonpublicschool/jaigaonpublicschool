import React from 'react'

// Define the button type styles
const buttonType = {
  CTA: "px-4 py-3 bg-secondary text-black text-sm font-semibold uppercase rounded-md hover:text-white",
  outline: "px-4 py-2 text-secondary text-sm font-semibold uppercase border border-secondary rounded-md hover:text-white"
}

// Define the props interface
interface ButtonProps {
  text: string;
  className?: string;
  handleClick?: () => void;
  type: keyof typeof buttonType;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  handleClick, 
  type 
}) => {
  return (
    <button 
      onClick={handleClick} 
      className={buttonType[type]}
    >
      {text}
    </button>
  )
}

export default Button