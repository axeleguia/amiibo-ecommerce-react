import { ChangeEvent, FC, FocusEvent } from "react";

interface InputProps {
  id: string;
  label?: string;
  type: "text" | "password";
  name: string;
  placeholder: string;
  className?: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnFocus: (e: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  id,
  label,
  type,
  name,
  placeholder,
  className,
  handleOnChange,
  handleOnFocus,
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={name} className="font-semibold text-xs mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        className={`border rounded-xl border-gray-300 p-2 focus:ring focus:ring-blue-500 outline-none ${className}`}
      />
    </div>
  );
};
