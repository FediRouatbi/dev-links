import { Link2, Link as LinkIcon, UserCircle2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-white rounded-lg">
      <div className="flex gap-2">
        <div className="p-1 rounded-lg bg-violet-600">
          <Link2 color="#fff" size={20} />
        </div>
        <div className="text-xl font-bold">devlinks</div>
      </div>

      <div className="flex gap-5">
        <NavLink
          to="/links"
          className={({ isActive }) => {
            return `flex items-center gap-1 px-4 py-2 rounded-lg ${
              isActive && "bg-violet-100 text-violet-600"
            } `;
          }}
        >
          <LinkIcon size={20} /> Links
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => {
            return `flex items-center gap-1 px-4 py-2 rounded-lg ${
              isActive && "bg-violet-100 text-violet-600"
            } `;
          }}
        >
          <UserCircle2 size={20} /> Profile
        </NavLink>
      </div>
      <Link to="/preview"
        type="button"
        className="text-violet-600 hover:text-white border border-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-500 dark:focus:ring-violet-800"
      >
        preview
      </Link>
    </nav>
  );
};
export { Navbar };
