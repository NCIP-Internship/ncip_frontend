
import { Search } from 'lucide-react';
import NcipLogo from "../Ipgroup/NcipLogo";


export const Ipgroup = () => {
    return (

        <div className="flex flex-col pb-10 md:flex-row-reverse">
            <div className="mt-20 mr-10 ml-20  p-2 sm:w-1/4 self-center ">
                <NcipLogo />
            </div>
            <div className="flex flex-col w-30 md:w-full ">
                    <h1 className="font-bold text-2xl pl-3 pt-3 md:pl-20 md:pt-10 lg:text-5xl">Indigenous Culture Communities/Indigenous Peoples (ICCs/IPs)</h1>
                <div className="flex flex-col pl-3 pr-3 md:pl-20 md:pr-60 lg:pr-96 relative mt-10">
                    <div className="relative">
                        <input type="text" placeholder="Search" className=" w-full py-2 px- pl-8 rounded-lg border border-gray-300" />
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col md:pl-20 p-5">
                    <div className="w-full h-5/6 mt-2 py-60 rounded-lg border border-gray-300 resize-y"></div>
                </div>       
            </div>
        </div>   

    );
  };
