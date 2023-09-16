import { MobileView } from "@/components";
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <div>
      <div className="rounded-b-[30px] bg-violet-600 h-96">
        <div className="p-4 mx-auto max-w-7xl">
          <nav className="flex items-center justify-between p-4 bg-white rounded-md">
            <Link
              to="/links"
              type="button"
              className="text-violet-600 hover:text-white border border-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-500 dark:focus:ring-violet-800"
            >
              Back to Editor
            </Link>
            <button
              type="submit"
              className="flex px-6 py-2 text-white rounded-lg bg-violet-600"
            >
              Share Link
            </button>
          </nav>
        <MobileView white />
        </div>
      </div>
    </div>
  );
};

export default Preview;
