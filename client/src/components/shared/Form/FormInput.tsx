export default function FormInput({ ...props }) {
  return (
    <div>
      <label
        htmlFor={props.label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.title}
      </label>
      <div className="mt-2">
        <input
          id={props.label}
          name={props.label}
          type={props.type}
          autoComplete={props.autocomplete}
          required={props.required}
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
