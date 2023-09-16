import { LinkButton } from "@/components";
import { Icons } from "@/constants";
import { useRbk } from "@/context/Provider";

const MobileView = ({ white }: { white?: boolean }) => {
  const { links, profile } = useRbk();

  return (
    <div
      className={` ${
        white && "bg-white mt-40 shadow-md"
      } absolute inset-0 w-[350px] p-4 -translate-x-1/2    border rounded-[32px] h-[600px] left-1/2 top-10`}
    >
      <div className="relative h-full border rounded-2xl">
        <div className="w-1/2 h-5 translate-x-1/2 border rounded-lg " />

        <div className="flex flex-col items-center justify-center px-5 mt-5">
          <img
            className="rounded-full w-36 h-36"
            src={
              profile.imageUrl ||
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            }
            alt="Extra large avatar"
          />

          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 ">
            {profile.firstName} {profile.lastName}
          </h1>

          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            {profile.email}
          </p>
          <div className="flex flex-col w-full gap-2">
            {links.map((link) => {
              return (
                <LinkButton
                  link={link.link}
                  platform={link.platform as Icons}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MobileView };
