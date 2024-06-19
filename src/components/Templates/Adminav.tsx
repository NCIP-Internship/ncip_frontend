
import {
  Bell,
  User,
} from 'lucide-react'

function Adminav(){
  return (
    <header className="h-[60px] bg-primary text-white flex items-center justify-between px-[30px] shadow-[0_6px_7px_-3px_rgba(0,0,0,0.35)]">
      <div className="header-left">
        <Bell className="icon" />
      </div>
      <div className="header-right flex space-x-4">
        <User className="icon" />
      </div>
    </header>
  )
}
export default Adminav;
