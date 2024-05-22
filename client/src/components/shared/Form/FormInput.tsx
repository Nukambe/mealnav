import React from 'react';

export default function FormInput({
  title,
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  label: string;
}) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <input
          id={label}
          name={label}
          type={props.type}
          autoComplete={props.autoComplete}
          required={props.required}
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
