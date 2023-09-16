import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LinkIcon, Plus } from "lucide-react";
import { Select } from "@/components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRbk } from "@/context/Provider";
import { options } from "@/constants";

const validationSchema = z.object({
  link: z.string().url(),
});
type ValidationSchema = z.infer<typeof validationSchema>;

export default function Example() {
  const { addNewLink } = useRbk();

  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const { links } = useRbk();
  const linksLeft = options.filter(
    (option) => !links.some((link) => link.platform === option.text)
  );
  const cancelButtonRef = useRef(null);
  const selectRef = useRef<HTMLButtonElement>(null);
  const addLink = (data:any) => {
    const selectValue = selectRef?.current?.children[1]?.textContent;
    if (!selectValue) return;
//@ts-ignore
    addNewLink({ link: data.link, platform: selectValue });

    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          reset();
        }}
        disabled={!linksLeft.length}
        type="button"
        className={`flex justify-center ${
          !linksLeft.length
            ? "bg-gray-100 text-gray-800 "
            : "text-violet-600 border-violet-600  hover:bg-violet-800 hover:text-white"
        } items-center gap-2 w-full my-10   border  focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2   `}
      >
        <Plus />
        Add new link
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                    {!linksLeft.length ? (
                      <h1 className="h-10 text-center">
                        You already Used all available links.
                      </h1>
                    ) : (
                      <>
                        <Select ref={selectRef} />
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
                              placeholder="url"
                              {...register("link")}
                            />
                          </div>
                          <p>{errors.link && errors.link.message}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                    {!!linksLeft.length && (
                      <button
                        className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-violet-600 hover:bg-violet-500 sm:ml-3 sm:w-auto"
                        onClick={handleSubmit(addLink)}
                      >
                        Add
                      </button>
                    )}
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
