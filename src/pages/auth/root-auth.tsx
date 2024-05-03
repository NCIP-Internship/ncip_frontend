import Navbar from "@/components/Header/Navbar";
import { Outlet } from "react-router-dom";

const RootAuth = () => {
  return (
    <>
      <Navbar />
      <section className="flex h-auto justify-center items-center">
        <Outlet />
      </section>
    </>
  );
};

export default RootAuth;
