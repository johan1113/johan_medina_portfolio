import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label htmlFor={props.id} className="block text-gray-400 mb-2">
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
