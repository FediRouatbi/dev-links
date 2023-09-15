import SelectButton from "@/components/Select/SelectButton";
import { Github, Youtube, Linkedin, Home, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
const options = [
  { text: "Youtube", icon: Youtube, id: crypto.randomUUID() },
  { text: "Github", icon: Github, id: crypto.randomUUID() },
  { text: "Linkedin", icon: Linkedin, id: crypto.randomUUID() },
  { text: "Home", icon: Home, id: crypto.randomUUID() },
];
const Select = () => {
  const [active, setActive] = useState(false);
  const [Selected, setSelected] = useState("");

  const onClickOption = (option: string) => {
    setSelected(option);
    setActive(false);
  };

  const renderElement = (id: string) => {
    const option = options.find((el) => el.id === id);
    if (!option) return null;

    const Icon = option?.icon;

    return (
      <>
        <Icon />
        <div className="flex justify-between w-full items-center">
          {option?.text}
          <ChevronDown />
        </div>
      </>
    );
  };
  useEffect(() => {
    // document.addEventListener("click", () => {
    //   console.log(active);
    //   if (active) setActive(false);
    //   else setActive(true);
    // });
  }, []);
  return (
    <>
      <div className="relative">
        <label htmlFor="" className="block  text-sm font-medium text-gray-900 ">
          Platform
        </label>
        <button
          onClick={() => setActive((prev) => !prev)}
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          className={`w-full ${
            !Selected && "justify-between"
          } flex gap-2 items-end flex-shrink-0 z-10   py-2.5 px-4 text-sm font-medium text-center bg-white text-gray-500  border border-gray-300 rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-100  `}
          type="button"
        >
          {Selected ? (
            <>{renderElement(Selected)}</>
          ) : (
            <>
              Select
              <ChevronDown />
            </>
          )}
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
            {options.map((option) => (
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
};

export { Select };
