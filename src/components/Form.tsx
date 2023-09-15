import { Link } from "@/components";
import { Plus } from "lucide-react";
const Form = () => {
  return (
    <section className="bg-white px-10 py-5 rounded-lg">
      <h2 className="text-4xl font-extrabold ">Customize your links</h2>
      <p className="my-4 text-lg text-gray-500">
        add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <button
        type="button"
        className="flex justify-center items-center gap-2 w-full my-10 text-violet-600 hover:text-white border border-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-500 dark:focus:ring-violet-800"
      >
        <Plus />
        Add new link
      </button>

      <div className="flex flex-col gap-5">
        <Link />
        <Link />
      </div>

      <button className="px-6 py-2 bg-violet-600 rounded-lg text-white  flex ml-auto mt-6">
        Save
      </button>
    </section>
  );
};

export { Form };
