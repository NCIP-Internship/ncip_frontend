import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { nanoid } from "nanoid";


const menus = [
  {
    label: 'COC',
    items: [
      {
        label: 'Application Process',
        href: '/coc/application_process'
      },
      {
        label: 'Requirements',
        href: '/coc/requirements'
      },
      {
        label: 'Approved COC',
        href: '/coc/approved'
      },
      {
        label: 'Guidelines',
        href: '/coc/guidelines'
      }
    ]
  },
  {
    label: 'IPO/IPS',
    items: [
      {
        label: 'Registration Process',
        href: "/ipoips/registration_process"
      },
      {
        label: 'Requirements',
        href: "/ipoips/requirements"
      },
      {
        label: 'Registered IPO',
        href: "#"
      },
      {
        label: 'Library Documentation',
        href: "#"
      },
    ]
  },
  {
    label: 'IPMR',
    items: [
      {
        label: 'Selection Process',
        href: "/ipmr/selection_process"
      },
      {
        label: 'IPMR List',
        href: "#"
      },
      {
        label: 'Guidelines',
        href: "/ipmr/guidelines"
      },
    ]
  }

]



const MobileNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="md:hidden flex items-center justify-between">
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-primary bg-opacity-95 z-40 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"
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
        <nav>
          <ul className="flex flex-col items-center justify-center text-white gap-5 px-5 mt-8 w-full">
            <li className="hover:font-semibold text-2xl">
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <Accordion type="single" collapsible>
              <AccordionItem value="services" className="border-none">
                <AccordionTrigger className="data-[state=open]:font-semibold font-normal text-2xl justify-start gap-1 hover:font-semibold hover:no-underline p-0 m-0 justify-center ml-5">Services</AccordionTrigger>
                <AccordionContent className="px-6 mt-3 pb-0 flex items-center justify-center">
                  <Accordion type="single" collapsible className="space-y-4">
                    {menus.map(menu => (
                      <AccordionItem value={nanoid()} className="border-none">
                        <AccordionTrigger className="data-[state=open]:font-semibold m-0 p-0 justify-center gap-1 hover:no-underline p-0 m-0 text-xl font-normal ml-5">{menu.label}</AccordionTrigger>
                        <AccordionContent className="mt-2 pb-0 px-6 gap-2 flex flex-col items-center">
                          {menu.items.map((item) => (
                            <Link to={item.href} className="text-lg hover:font-semibold">{item.label}</Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}


                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <li className="hover:font-semibold text-2xl">
              <Link to="" onClick={toggleSidebar}>About</Link>
            </li>
            <li className="hover:font-semibold text-2xl">
              <Link to="" onClick={toggleSidebar}>FAQs</Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="outline"
          className="mt-8 font-Inter text-xl border-2 px-4 py-2 rounded-full text-white bg-white-500 shadow-md hover:text-black hover:bg-white"
        >
          Sign In
        </Button>
      </div>
    </>
  );
};

export default MobileNavbar;
