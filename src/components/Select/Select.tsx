import SelectButton from "@/components/Select/SelectButton";
import { Icons, getIcon, options } from "@/constants";
import { useRbk } from "@/context/Provider";
import { ChevronDown, LucideIcon } from "lucide-react";
import {  useState, forwardRef } from "react";

type Props = { disabled?: boolean; platform?: Icons };
const Select = forwardRef<HTMLButtonElement, Props>(
  ({ disabled, platform }, ref) => {
    const [active, setActive] = useState(false);
    const [Selected, setSelected] = useState("");
    const { links } = useRbk();
    const linksLeft = options.filter(
      (option) => !links.some((link) => link.platform === option.text)
    );

    const onClickOption = (option: string) => {
      setSelected(option);
      setActive(false);
    };
    const renderElement = (id: string) => {
      const option = options.find((el) => el.id === id);
      const PlatformIcon = getIcon?.[platform as Icons];
      if (platform)
        return (
          <div className="flex items-center gap-2">
            <PlatformIcon />
            {platform}
          </div>
        );
      const Icon = option?.icon as LucideIcon;
      if (Selected)
        return (
          <>
            <Icon />
            <div className="flex items-center justify-between w-full">
              {option?.text}
              <ChevronDown />
            </div>
          </>
        );

      return (
        <>
          Select
          <ChevronDown />
        </>
      );
    };

    return (
      <>
        <div className="relative">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-900 "
          >
            Platform
          </label>
          <button
            ref={ref}
            onClick={() => !disabled && setActive((prev) => !prev)}
            id="states-button"
            data-dropdown-toggle="dropdown-states"
            className={`w-full ${
              !Selected && "justify-between"
            } flex gap-2 items-end flex-shrink-0 z-10  ${
              disabled && "cursor-auto bg-[#f1f3f5]"
            }  py-2.5 px-4 text-sm font-medium text-center bg-white text-gray-500  border border-gray-300 rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-100  `}
            type="button"
          >
            {renderElement(Selected)}
          </button>
          <div
            id="dropdown-states"
            className={`w-full ${
              active ? "absolute" : "hidden"
            }   z-10  bg-white divide-y divide-gray-100 rounded-lg shadow `}
          >
            <ul
              className={` ${"hidden"}py-2 text-sm text-gray-700 dark:text-gray-200`}
              aria-labelledby="states-button"
            >
              {linksLeft.map((option) => (
                <SelectButton
                  key={option.id}
                  Icon={option.icon}
                  text={option.text}
                  id={option.id}
                  onClick={onClickOption}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
);

export { Select };
