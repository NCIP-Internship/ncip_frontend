import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
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
} from "@/components/ui/dropdown-menu"

const Navbar = () => {

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-primary sticky top-0 z-50 w-full max-h-24 h-auto p-8 flex items-center justify-around">
      <h1 className="font-extrabold text-4xl text-white">GOVPH</h1>
      <ul className="text-white flex gap-20">
        <li className="hover:font-semibold">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:font-semibold w-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link to="#" className="hover:font-semibold">Services</Link>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 ml-40 mt-2 p-2">
              <DropdownMenuLabel className="font-extrabold">Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger><span className="font-semibold">COC</span></DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="ml-2">
                    <DropdownMenuItem><Link to="/coc/application-process">Application Process</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to="/coc/requirements">Requirements</Link></DropdownMenuItem>
                    <DropdownMenuItem><span>Approved COC</span></DropdownMenuItem>
                    <DropdownMenuItem><Link to="/coc/guidelines">Guidelines</Link></DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger><span>IPO/IPS</span></DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="ml-2">
                    <DropdownMenuItem><Link to="/ipoips/registration_process">Registration Process</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link to="/ipoips/requirements">Requirements</Link></DropdownMenuItem>
                    <DropdownMenuItem><span>Registered IPO</span></DropdownMenuItem>
                    <DropdownMenuItem><span>Library Documentation</span></DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger><span>IPMR</span></DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="ml-2">
                    <DropdownMenuItem><Link to="/ipmr/selection_process">Selection Process</Link></DropdownMenuItem>
                    <DropdownMenuItem><span>IPMR List</span></DropdownMenuItem>
                    <DropdownMenuItem><Link to="/ipmr/guidelines">Guideline</Link></DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem><span>IP Group</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hover:font-semibold w-8"><Link to="#" onClick={() => handleScroll('about')}>About</Link></li>
        <li className="hover:font-semibold w-8"><Link to="#" onClick={() => handleScroll('faqs')}>FAQs</Link></li>
      </ul>
      <Button variant="outline" className="font-Inter border-2  px-6 py-2 rounded-full text-white bg-white-500 shadow-md hover:text-black hover:bg-white">Sign In</Button>
    </nav>
  );
};

export default Navbar;
