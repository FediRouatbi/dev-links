import { Select } from "@/components";
import { Icons } from "@/constants";
import { useRbk } from "@/context/Provider";
import { Link as LinkIcon, AlignJustify } from "lucide-react";
const Link = ({
  link,
  platform,
  id,
  num,
}: {
  link: string;
  platform: string;
  id: string;
  num: number;
}) => {
  const { deleteLink } = useRbk();
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between mb-5 ">
        <div className="flex items-center gap-2">
          <button>
            <AlignJustify />
          </button>
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-900 "
          >
            Link #{num}
          </label>
        </div>

        <button onClick={() => deleteLink(id)} className="hover:text-red-300">
          remove
        </button>
      </div>
      <Select disabled platform={platform as Icons} />

      <div className="mt-4">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Link
        </label>
        <div className="relative">
          <LinkIcon
            className="absolute -translate-y-1/2 top-1/2 left-4"
            size={20}
          />
          <input
            type="text"
            id="first_name"
            className=" pl-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={link}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export { Link };
