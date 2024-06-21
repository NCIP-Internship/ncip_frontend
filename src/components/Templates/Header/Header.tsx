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
} from "@/components/ui/dropdown-menu";
import HeaderMobile from './Header[mobile]'

const Header = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <nav className="bg-primary sticky top-0 z-50 w-full max-h-24 h-auto p-4 lg:p-8 flex items-center justify-between lg:justify-around">
        <h1 className="font-extrabold text-2xl lg:text-4xl text-white">GOVPH</h1>
        <ul className="hidden md:flex text-white gap-10 lg:gap-20">
          <li className="hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-semibold w-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link to="#" className="hover:font-semibold">Services</Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2 p-2" align="start">
                <DropdownMenuLabel className="font-extrabold">Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger><span>COC</span></DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-2">
                      <DropdownMenuItem><Link to="/coc/application_process">Application Process</Link></DropdownMenuItem>
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
                      <DropdownMenuItem><Link to="/ipmr/guidelines">Guidelines</Link></DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem asChild><Link to='/ipgroup'>IP Group</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="hover:font-semibold w-8"><Link to="#" onClick={() => handleScroll('about')}>About</Link></li>
          <li className="hover:font-semibold w-8"><Link to="#" onClick={() => handleScroll('faqs')}>FAQs</Link></li>
        </ul>
        <Button
          variant="outline"
          className="hidden md:block font-Inter border-2 px-4 lg:px-6 py-1 lg:py-2 rounded-full text-white bg-white-500 shadow-md hover:text-black hover:bg-white"
        >
          Sign In
        </Button>
        <HeaderMobile />
      </nav>
    </>
  );
};

export default Header;
