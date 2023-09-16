import { Link } from "@/components";
import Example from "@/components/dialog/Dialog";
import { useRbk } from "@/context/Provider";
import { Reorder } from "framer-motion";
import { toast } from "sonner";

const Form = () => {
  const { links, updateOrder } = useRbk();

  return (
    <section className="flex flex-col px-10 py-5 bg-white rounded-lg">
      <h2 className="text-4xl font-extrabold ">Customize your links</h2>
      <p className="my-4 text-lg text-gray-500">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <Example />
      <Reorder.Group axis="y" values={links} onReorder={updateOrder}>
        <div className="flex flex-col gap-5">
          {links.map((link, i) => (
            <Reorder.Item key={link.id} value={link}>
              <Link
                link={link.link}
                platform={link.platform}
                id={link.id}
                num={i + 1}
              />
            </Reorder.Item>
          ))}
        </div>
      </Reorder.Group>
      <div className="mt-auto">
        <button
          onClick={() =>
            toast.success("Yout changes have been successfuly saved!")
          }
          className="flex px-6 py-2 mt-6 ml-auto text-white rounded-lg bg-violet-600"
        >
          Save
        </button>
      </div>
    </section>
  );
};

export { Form };
