import NcipLogo from "../Coc-Process/NcipLogo";
import { SquareArrowDown } from 'lucide-react';


export const CocReq = () => {
    return (
        <div className="flex flex-col pb-10 md:flex-row-reverse">
            <div className="mt-20 mr-10 ml-20  p-2 sm:w-1/4 self-center ">
                <NcipLogo />
            </div>
            <div className="flex flex-col w-30 md:w-full ">
                <h1 className="font-bold text-2xl pl-3 pt-3 md:pl-20 md:pt-10 lg:text-5xl md:pl-20">REQUIREMENTS</h1>
                <h3 className="font-base text-sm pl-3 pt-2 md:pl-20 md:pt-5 lg:text-xl">These are the Requirements for the application of Certification of Confirmation.</h3>
                    <div className="border border-blue-600 border-l-8 border-t-0 border-b-0 border-r-0 rounded-none p-2 ml-20 mt-10">
                        <h1 className="text-2xl font-bold">Application and Required Documents</h1>
                    </div>
                        <h3 className="pl-20 pt-5 pr-4">Personal processing of application for COC issuance shall at all times be required.</h3>
                        <h3 className="pl-20 pt-5 pr-4">The applicant shall complete Index Form-1 and submit the same along with the following documents/requirements:</h3>
                        <h3 className="pl-20 pt-5 pr-4">A. Certificate of IP Membership (CIPM) duly issued by the recognized IP Leader/Elder of the community where the applicant is a member or claims to be a member;</h3>
                        <h3 className="pl-20 pt-5 pr-4">B. Properly filled-up genealogical Form 2 (secured from NCIP);</h3>
                        <h3 className="pl-20 pt-5 pr-4">C. Two copies of “2x2” ID pictures taken at most 6 months prior to the application; and</h3>
                        <h3 className="pl-20 pt-5 pr-4">D. 2 pcs. Documentary stamps</h3>
                    <div className="flex pt-20 pl-20">
                        <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Donwnload Documents <SquareArrowDown className="ml-2"/></button>
                    </div>   
            </div>
         </div>
    );
};