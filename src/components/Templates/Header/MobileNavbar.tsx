import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileNavbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <>
        <nav className="lg:hidden flex items-center justify-between">
          <button onClick={toggleSidebar} className="text-white mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
  
        <div
          className={`fixed inset-0 bg-primary bg-opacity-95 z-40 transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex items-center justify-between p-4">
            <h1 className="font-extrabold text-2xl text-white">GOVPH</h1>
            <button onClick={toggleSidebar} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center text-white gap-4 mt-8">
            <li className="hover:font-semibold">
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li className="hover:font-semibold">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link to="#" className="hover:font-semibold">Services</Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 p-2">
                  <DropdownMenuLabel className="font-extrabold">Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger><span className="font-semibold">COC</span></DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-2">
                        <DropdownMenuItem><Link to="/coc/application-process" onClick={toggleSidebar}>Application Process</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/coc/requirements" onClick={toggleSidebar}>Requirements</Link></DropdownMenuItem>
                        <DropdownMenuItem><span>Approved COC</span></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/coc/guidelines" onClick={toggleSidebar}>Guidelines</Link></DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger><span>IPO/IPS</span></DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-2">
                        <DropdownMenuItem><Link to="/ipoips/registration_process" onClick={toggleSidebar}>Registration Process</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/ipoips/requirements" onClick={toggleSidebar}>Requirements</Link></DropdownMenuItem>
                        <DropdownMenuItem><span>Registered IPO</span></DropdownMenuItem>
                        <DropdownMenuItem><span>Library Documentation</span></DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger><span>IPMR</span></DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-2">
                        <DropdownMenuItem><Link to="/ipmr/selection_process" onClick={toggleSidebar}>Selection Process</Link></DropdownMenuItem>
                        <DropdownMenuItem><span>IPMR List</span></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/ipmr/guidelines" onClick={toggleSidebar}>Guideline</Link></DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem><span>IP Group</span></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="hover:font-semibold">
              <Link to="" onClick={toggleSidebar}>About</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="" onClick={toggleSidebar}>FAQs</Link>
            </li>
          </ul>
          <Button
            variant="outline"
            className="mt-6 font-Inter border-2 px-4 py-2 rounded-full text-white bg-white-500 shadow-md hover:text-black hover:bg-white"
          >
            Sign In
          </Button>
        </div>
      </>
    );
  };

  export default MobileNavbar;