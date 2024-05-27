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

const Ipmreq = () => {
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
          <h1 className="text-4xl font-bold">Mandatory Representation of Indigenous 
            Peoples</h1>
        </div> 
      </div>
      
      <section className="flex flex-col text-left px-5 md:px-10 lg:px-20 ml-40 mr-40 pb-40">
      <div className="flex items-center mt-10">
        <ShieldAlert color="#d10000" />
        <h4 className=" ml-2 font-medium italic">Note: It is important that you follow all the necessary procedures when applying for an Mandatory Representation of Indigenous 
        Peoples in Local Legislative Councils and Policy-making Bodies</h4>
      </div>

      <div className="w-1/3 mt-20">
        <ul className="flex justify-around font-semibold text-lg">
          <li className="flex items-center hover:text-sky-700"> <a href="/coc/application-process">
            Application Process </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center"> <a href="/coc/requirements">
            Requirements </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/ipmr/Ipmrguidelines">
            Guidelines </a> <ChevronRight size="1em" className="ml-2" />
          </li>
        </ul>
      </div>

      <h1 className="font-bold text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
      Requirements
        </h1>

      <StepInformation title="General Requirements">
          <h3 className="pl-20 pt-5 pr-4 ">
            the following shall be the minumum requirements for one to qualify as IPMR
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            1. A bonafide member of the Indigenous Peoples community he/she seeks to represent, supported by a certification from his/her IPS.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            2. Able to read and write.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            3. Physically, Mentally and Morally fit.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            4. A natural born Filipino citizen.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            5. At least 18 years of age on the date of assumption and.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            6. Such other qualifications that the community may include in their local guidelines.
          </h3> 
        </StepInformation>


        <StepInformation title="Special Requirements">
          <h3 className="pl-20 pt-5 pr-4 ">
            In addition to the above, an aspiring IPMR should possess the follwing qualificatins:
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            1. IPMR in local legislative bodies:
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            a. Conversant with the culture of the community he/she represents.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            b. A residents in the community for the ten (10) years continuously without interruption for the period immediately preceding the time of selection, without prejudice to the community providing the requirement of domicile to its local guidelines and
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            c. A registered voter in the barangay, municipality, city or province where he or she intends to hold office.
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            2. IPMRs in policy-making bodies
          </h3> 
          <h3 className="pl-20 pt-5 pr-4 ">
            a. At least high school graduate and
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            b. A resident in the barangay, municipality, city or province where he/she will hold office.
          </h3> 
        </StepInformation>
        
      </section>
    </>
  );
};

export default Ipmreq;
