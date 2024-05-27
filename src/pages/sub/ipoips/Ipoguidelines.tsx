import Navbar from "@/components/Templates/Header/Navbar";
import { SquareArrowDown,ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import {
  ShieldAlert,
} from "lucide-react";

const StepInformation = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col justify-center items-start pt-16">
      <div className=" rounded-r-lg pl-10 p-4">
        <h1 className="text-3xl md:text-2xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
};

const Ipoguidelines = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary p-10 flex justify-end items-center clip-path-polygon-shape relative">
        <div className="flex items-center flex-row-reverse h-96">
          <img className="size-60 max-w-full h-auto mr-4" src="/logo2.png" alt="NCIP" />
          <h1 className="text-white text-3xl font-medium mr-10">National Commission of Indigenous Peoples</h1>
        </div>
      </section>
      <div className="bg-white shadow-xl rounded-lg w-full md:w-1/3 mx-auto md:ml-60 absolute top-80 p-10">
        <div className="h-32 w-full text-black border flex flex-col justify-center border-indigo-800 border-b-0 border-t-0 border-l-8 border-r-0">
          <h1 className="text-4xl font-bold">Certificate of Confirmation</h1>
        </div> 
      </div>
      
      <section className="flex flex-col text-left px-5 md:px-10 lg:px-20 ml-40 mr-40 pb-40">
      <div className="flex items-center mt-10">
        <ShieldAlert color="#d10000" />
        <h4 className=" ml-2 font-medium italic">Note: It is important that you follow all the necessary procedures when applying for an authentic ethnic identity as an Indigenous person.</h4>
      </div>
      <div className="w-1/3 mt-20">
        <ul className="flex justify-around font-semibold text-lg">
          <li className="flex items-center hover:text-sky-700"> <a href="/ipoips/Ipoprocess">
            Application Process </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/ipoips/Iporequirements">
            Requirements </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center"> <a href="/ipoips/Ipoguidelines">
            Guidelines </a> <ChevronRight size="1em" className="ml-2" />
          </li>
        </ul>
      </div>

        <h1 className="font-bold text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
          Guidelines
        </h1>
        <h6 className="font-bold text-base lg:text-lg flex flex-col justify-center items-center lg:pt-20">
        NCIP Administrative Order No. 02 Series of 2019
        </h6>
        <h4 className="font-semibold lg:text-4xl flex flex-col justify-center items-center mt-2">
        GUIDELINES FOR THE ISSUANCE OF CERTIFICATE OF CONFIRMATION
        </h4>





      </section>
    </>
  );
};

export default Ipoguidelines;
