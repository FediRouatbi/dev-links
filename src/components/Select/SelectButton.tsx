import { LucideIcon } from "lucide-react";

const SelectButton = ({
  Icon,
  text,
  id,
  onClick,
}: {
  Icon: LucideIcon;
  text: string;
  id: string;
  onClick: (string: string) => void;
}) => {
  return (
    <li>
      <button
        onClick={() => onClick(id)}
        type="button"
        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
      >
        <div className="inline-flex items-center gap-2">
          <Icon size={20} /> {text}
        </div>
      </button>
    </li>
  );
};

export default SelectButton;
