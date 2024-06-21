import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

function HeaderAuthorized() {
  return (
    <header className="w-full h-[60px] bg-primary text-white flex items-center justify-end px-2 shadow-[0_6px_7px_-3px_rgba(0,0,0,0.35)] sticky top-0">

      <div className='flex items-center gap-2'>
        <div className='text-right'>
          <p className='leading-tight'>Juan Dela Cruz</p>
          <p className='leading-tight text-sm text-gray-400'>Admin</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='flex items-center'>
              <img src='/logo2.png' className='w-11 h-11' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[10rem]' align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-gray-200' />
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className='bg-gray-200' />
            <DropdownMenuItem className='text-red-500 hover:text-red-400 flex justify-center'>
              Logout
            </DropdownMenuItem>


          </DropdownMenuContent>

        </DropdownMenu>
      </div>
    </header>
  )
}
export default HeaderAuthorized;
