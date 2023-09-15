import { Link2, Link, UserCircle2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-5 py-3 rounded-lg">
      <div className="flex  gap-2">
        <div className="bg-violet-600 p-1  rounded-lg">
          <Link2 color="#fff" size={20} />
        </div>
        <div className="text-xl font-bold">devlinks</div>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-1 px-4 py-2 bg-violet-100 text-violet-600 rounded-lg">
          <Link size={20} /> Links
        </div>
        <div className="flex items-center gap-1 px-4 py-2">
          <UserCircle2 />
          Profile detials
        </div>
      </div>
      <button
        type="button"
        className="text-violet-600 hover:text-white border border-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-500 dark:focus:ring-violet-800"
      >
        preview
      </button>
    </nav>
  );
};
export { Navbar };
