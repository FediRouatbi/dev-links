const Input = ({
  placeHolder,
  label,
  required,
}: {
  placeHolder: string;
  label: string;
  required?: boolean;
}) => {
  return (
    <div className=" relative  flex items-center justify-between w-full">
      <label htmlFor="required-email" className="text-gray-700 w-1/3 ">
        {label}
        {required && <span className="text-red-500 required-dot">*</span>}
      </label>
      <input
        type="text"
        id="required-email"
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
        name="email"
        placeholder={placeHolder}
      />
    </div>
  );
};

export { Input };
