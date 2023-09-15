import { Input } from "@/components";

const Profile = () => {
  return (
    <div className="bg-white px-10 py-5 rounded-lg">
      <h2 className="text-4xl font-extrabold ">Profile Details</h2>
      <p className="my-4 text-lg text-gray-500">
        Add yout details to create a personal touch to your profile.
      </p>

      <div className=" bg-gray-100 rounded-lg px-5 py-10 flex items-center ">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900  w-1/2"
        >
          Profile picture
        </label>

        <div className="flex flex-1 items-center justify-center w-full max-w-xs ">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center  px-7 py-4  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   "
          >
            <div className="flex flex-col items-center justify-center  ">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 ">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 ">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-lg px-5 py-10 flex flex-col gap-3 mt-4">
        <Input placeHolder="Fedi" label="First name" required />
        <Input placeHolder="Rouatbi" label="Last name" required />
        <Input placeHolder="fedi@fedi.com" label="Email" />
      </div>

      <button className="px-6 py-2 bg-violet-600 rounded-lg text-white  flex ml-auto mt-6">
        Save
      </button>
    </div>
  );
};

export { Profile };
