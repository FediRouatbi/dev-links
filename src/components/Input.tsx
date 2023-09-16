import { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  {
    placeHolder: string;
    label: string;
    required?: boolean;
    error?: string;
  }
>(({ placeHolder, label, required, error, ...rest }, ref) => {
  return (
    <div className="relative flex items-start justify-between w-full ">
      <label htmlFor="required-email" className="w-1/3 text-gray-700 ">
        {label}
        {required && <span className="text-red-500 required-dot">*</span>}
      </label>
      <div className="flex-1 w-full">
        <input
          ref={ref}
          type="text"
          id="required-email"
          className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
          name="email"
          placeholder={placeHolder}
          {...rest}
        />

        <p className="h-4 text-red-300 ">{error && error}</p>
      </div>
    </div>
  );
});

export { Input };
