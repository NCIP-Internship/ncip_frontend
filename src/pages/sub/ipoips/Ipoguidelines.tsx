import Navbar from "@/components/Templates/Header/Navbar";
import { SquareArrowDown,ChevronRight } from "lucide-react";
import {
  ShieldAlert,
} from "lucide-react";


const Ipoguidelines = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary p-5 sm:p-8 md:p-10 flex justify-end items-center clip-path-polygon-shape relative">
        <div className="flex items-center flex-row-reverse h-64 sm:h-72 md:h-80 lg:h-96">
          <img className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto mr-2 sm:mr-3 md:mr-4" src="/logo2.png" alt="NCIP" />
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mr-4 sm:mr-6 md:mr-8 lg:mr-10 font-primary">National Commission of Indigenous Peoples</h1>
        </div>
      </section>
      <div className="bg-white shadow-xl rounded-lg w-full sm:w-3/4 md:w-3/5 lg:w-1/3 mx-auto absolute top-32 sm:top-40 md:top-80 lg:top-80 lg:left-56 p-5 sm:p-7 md:p-10">
        <div className="sm:h-28 md:h-14 lg:h-24 w-full text-black flex flex-col justify-center border border-indigo-800 border-b-0 border-t-0 border-l-8 border-r-0">
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold font-primary">Indigenous Peoples Organization and Indigenous political structures</h1>
        </div>
      </div>


      <section className="flex flex-col text-left px-5 sm:px-8 md:px-10 lg:px-12 ml-10 sm:ml-20 md:ml-30 lg:ml-40 mr-10 sm:mr-20 md:mr-30 lg:mr-40 pb-20 sm:pb-30 md:pb-40 lg:pb-50 font-primary">
        <div className="flex items-center mt-5 sm:mt-10">
          <ShieldAlert color="#d10000" />
          <h4 className="ml-2 sm:ml-3 md:ml-4 lg:ml-5 font-medium italic">Note: It is important that you follow all the necessary procedures when applying for confirmation of Indigenous political structures and the registration of Indigenous People Organizations.</h4>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-10 sm:mt-15 md:mt-20">
          <ul className="flex flex-wrap justify-around font-semibold text-sm sm:text-md md:text-lg">
            <li className="flex items-center hover:text-sky-700">
              <a href="/ipoips/Ipoprocess">Application Process</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
            <li className="flex items-center hover:text-sky-700">
              <a href="/ipoips/Iporequirements">Requirements</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
            <li className="flex items-center hover:text-sky-700">
              <a href="/ipoips/Ipoguidelines">Guidelines</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
          </ul>
        </div>

        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">Guidelines</h1>
        <h6 className="font-bold text-base md:text-lg flex flex-col justify-center items-center lg:pt-20">NCIP Administrative Order No. 02 Series of 2019</h6>
        <h4 className="font-semibold text-xl md:text-4xl flex flex-col justify-center items-center mt-2"> THE GENERAL GUIDELINES ON THE CONFIRMATION OF INDIGENOUS POLITICAL
        STRUCTURES AND THE REGISTRATION OF INDIGENOUS PEOPLES’
        ORGANIZATIONS</h4>

        <div className="w-full h-screen mt-10">
          <iframe
            src="/files/ipoipsguidelines.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>

      </section>
    </>
  );
};

export default Ipoguidelines;
