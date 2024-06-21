import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, CalendarIcon, Users, LockIcon, UserCog, ChevronDown, ChevronUp, Settings } from 'lucide-react';

const Sidebar = () => {
  const [isCocSubMenuOpen, setIsCocSubMenuOpen] = useState(false);
  const [isIpoIpsSubMenuOpen, setIsIpoIpsSubMenuOpen] = useState(false);
  const [isIpMrSubMenuOpen, setIsIpMrSubMenuOpen] = useState(false);

  const toggleCocSubMenu = () => {
    setIsCocSubMenuOpen(!isCocSubMenuOpen);
  };

  const toggleIpoIpsSubMenu = () => {
    setIsIpoIpsSubMenuOpen(!isIpoIpsSubMenuOpen);
  };

  const toggleIpMrSubMenu = () => {
    setIsIpMrSubMenuOpen(!isIpMrSubMenuOpen);
  };

  return (
    <aside className="bg-gainsboro h-screen py-10 w-[21rem] sticky top-0 flex flex-col justify-between">
      <div className="flex flex-col text-center items-center mb-8">
        <img src="/logo2.png" alt="Logo" className="h-auto w-28" />
        <h2 className="text-lg font-semibold">National Commission of Indigenous Peoples</h2>
      </div>

      <div className='pl-12'>
        <div className="w-full mb-4">
          <h2 className="text-black text-sm text-left font-semibold mb-2">Menu</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <LayoutDashboard size={18} className="mr-2 text-black" />
              <Link to="/u/dashboard" className="text-black hover:text-saturated transition duration-300">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center">
              <CalendarIcon size={18} className="mr-2 text-black" />
              <Link to="/u/calendar" className="text-black hover:text-saturated transition duration-300">
                Calendar
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h2 className="text-sm text-left font-semibold mb-2">Organization</h2>
          <ul className="space-y-2">
            <li className="flex flex-col items-start">
              <div className="flex items-center cursor-pointer" onClick={toggleCocSubMenu}>
                <FileText size={18} className="mr-2 text-black" />
                <span className="text-black hover:text-saturated transition duration-300">
                  COC
                </span>
                {isCocSubMenuOpen ? <ChevronUp size={18} className="ml-auto" /> : <ChevronDown size={18} className="ml-auto" />}
              </div>
              {isCocSubMenuOpen && (
                <ul className="ml-8 space-y-2 text-left">
                  <li>
                    <Link to="/u/coc/application_process" className="text-black hover:text-saturated transition duration-300">
                      Application Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/coc/status-of-application" className="text-black hover:text-saturated transition duration-300">
                      Status of Application
                    </Link>
                  </li>
                  <li>
                    <Link to="/coc/roster-issued" className="text-black hover:text-saturated transition duration-300">
                      Roster Issued
                    </Link>
                  </li>
                  <li>
                    <Link to="/coc/approved-coc" className="text-black hover:text-saturated transition duration-300">
                      Approved COC
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex flex-col items-start">
              <div className="flex items-center cursor-pointer" onClick={toggleIpoIpsSubMenu}>
                <FileText size={18} className="mr-2 text-black" />
                <span className="text-black hover:text-saturated transition duration-300">
                  IPO & IPS
                </span>
                {isIpoIpsSubMenuOpen ? <ChevronUp size={18} className="ml-auto" /> : <ChevronDown size={18} className="ml-auto" />}
              </div>
              {isIpoIpsSubMenuOpen && (
                <ul className="ml-8 space-y-2 text-left">
                  <li>
                    <Link to="/ipo-ips/ipo-application" className="text-black hover:text-saturated transition duration-300">
                      IPO Application
                    </Link>
                  </li>
                  <li>
                    <Link to="/ipo-ips/ips-process" className="text-black hover:text-saturated transition duration-300">
                      IPS Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/ipo-ips/registered-ipo" className="text-black hover:text-saturated transition duration-300">
                      Registered IPO
                    </Link>
                  </li>
                  <li>
                    <Link to="/ipo-ips/confirmed-ips" className="text-black hover:text-saturated transition duration-300">
                      Confirmed IPS
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex flex-col items-start">
              <div className="flex items-center cursor-pointer" onClick={toggleIpMrSubMenu}>
                <FileText size={18} className="mr-2 text-black" />
                <span className="text-black hover:text-saturated transition duration-300">
                  IPMR
                </span>
                {isIpMrSubMenuOpen ? <ChevronUp size={18} className="ml-auto" /> : <ChevronDown size={18} className="ml-auto" />}
              </div>
              {isIpMrSubMenuOpen && (
                <ul className="ml-8 space-y-2 text-left">
                  <li>
                    <Link to="/ipmr/ipmr-process" className="text-black hover:text-saturated transition duration-300">
                      IPMR Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/ipmr/registered-ipmr" className="text-black hover:text-saturated transition duration-300">
                      Registered IPMR
                    </Link>
                  </li>
                  <li>
                    <Link to="/ipmr/confirmed-ipmr" className="text-black hover:text-saturated transition duration-300">
                      Confirmed IPMR
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex items-center">
              <Users size={18} className="mr-2 text-black" />
              <Link to="/ip-group" className="text-black hover:text-saturated transition duration-300">
                IP GROUP
              </Link>
            </li>
            <li className="flex items-center">
              <LockIcon size={18} className="mr-2 text-black" />
              <Link to="/user-role" className="text-black hover:text-saturated transition duration-300">
                USER ROLE
              </Link>
            </li>
            <li className="flex items-center">
              <UserCog size={18} className="mr-2 text-black" />
              <Link to="/account" className="text-black hover:text-saturated transition duration-300">
                ACCOUNT
              </Link>
            </li>
            <li className="flex items-center">
              <Settings size={18} className="mr-2 text-black" />
              <Link to="/settings" className="text-black hover:text-saturated transition duration-300">
                SETTINGS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
