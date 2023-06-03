import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";

type InputTypes = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  value?: string | number | Date;
  onChange?: ChangeEventHandler | undefined;
  type: HTMLInputTypeAttribute;
} & InputTypes;

const Input = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-left text-gray-700"
      >
        {label}
      </label>
      <div className="w-full mt-1 mb-1 border border-gray-200 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          className="block w-full p-2 sm:text-sm disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-50"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
