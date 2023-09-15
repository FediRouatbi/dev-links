import { Select } from "@/components";
import { Link as LinkIcon, AlignJustify } from "lucide-react";
const Link = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className=" flex justify-between mb-5">
        <div className="flex items-center gap-2">
          <button>
            <AlignJustify />
          </button>
          <label
            htmlFor=""
            className="block  text-sm font-medium text-gray-900 "
          >
            Link #1
          </label>
        </div>

        <button>remove</button>
      </div>
      <Select />

      <div className="mt-4">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Link
        </label>
        <div className="relative">
          <LinkIcon
            className="absolute top-1/2 left-4 -translate-y-1/2"
            size={20}
          />
          <input
            type="text"
            id="first_name"
            className=" pl-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="url"
            required
          />
        </div>
      </div>
    </div>
  );
};

export { Link };
