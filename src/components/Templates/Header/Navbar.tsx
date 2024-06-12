import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./button";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary font-primary">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <h1 className="text-white font-Inter font-extrabold text-4xl">
              GOVPH
            </h1>
          </Link>
          <div
            className={`${open ? "text-black" : "text-white"} text-3xl md:hidden`}
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 font-Inter text-white font-semibold">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              FAQs
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>

        {/* for mob nav */}
        <ul
          className={`md:hidden z-10 px-10 font-Inter font-semibold bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24  duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li className="flex item-center">
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li className="flex item-center">
            <Link to="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li className="flex item-center">
            <Link to="/" className="py-7 px-3 inline-block">
              FAQs
            </Link>
          </li>
          <div className="py-5 border-inherit flex align-center justify-center font-bold">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
