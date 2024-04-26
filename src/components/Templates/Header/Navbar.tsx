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
  return (
    <nav className="bg-primary sticky top-0 z-50 w-full max-h-24 h-auto p-8 flex items-center justify-around">
        <h1 className="font-extrabold text-4xl text-white">GOVPH</h1>
        <ul className="text-white flex gap-20">
          <li className="hover:font-semibold"><Link to="">Home</Link></li>

          <li className="hover:font-semibold">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link to="#" className="hover:font-semibold">Services</Link>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 ml-40 mt-8 p-2">
                
                <DropdownMenuLabel className="font-extrabold">Categories</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger><span className="font-semibold">COC</span></DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-2">

                        <DropdownMenuItem><span>Application Process</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Requirements</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Approved COC</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Guidelines</span></DropdownMenuItem>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>


                  <DropdownMenuSub>
                  <DropdownMenuSubTrigger><span>IPO/IPS</span></DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-2">

                        <DropdownMenuItem><span>Registration Process</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Requirements</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Registered IPO</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Library Documentation</span></DropdownMenuItem>
                        
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>


                  <DropdownMenuSub>
                  <DropdownMenuSubTrigger><span>IPMR</span></DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-2">

                        <DropdownMenuItem><span>Selection Process</span></DropdownMenuItem>

                        <DropdownMenuItem><span>IPMR List</span></DropdownMenuItem>

                        <DropdownMenuItem><span>Guideline</span></DropdownMenuItem>
        
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuItem>
                    <span>IP Group</span>
                  </DropdownMenuItem>
      
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li className="hover:font-semibold"><Link to="">About</Link></li>
          <li className="hover:font-semibold"><Link to="">FAQs</Link></li>
        </ul>

        <Button variant="outline" className="font-Inter border-2  px-6 py-2 rounded-full text-white bg-white-500 shadow-md hover:text-black hover:bg-white" >Open</Button>   
        
    </nav>

  );
};

export default Navbar;
