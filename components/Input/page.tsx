import React from 'react';

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      required
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
