import { MobileView, Navbar } from "@/components";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const LinksPage = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate replace to="/links" />;
  }

  return (
    <section className="p-4 mx-auto max-w-7xl">
      <Navbar />
      <section className="grid grid-cols-1   sm:grid-cols-[3fr,4fr] gap-5  py-10 min-h-[800px]">
        <div className="relative block bg-white rounded-lg min-h-[700px]">
          <MobileView />
        </div>
        <Outlet />
      </section>
    </section>
  );
};

export default LinksPage;
