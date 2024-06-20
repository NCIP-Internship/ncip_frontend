import { SquareArrowDown, ChevronRight, ShieldAlert } from "lucide-react";
import { ReactNode } from "react";

const StepInformation = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col justify-center items-start pt-16">
      <div className="rounded-r-lg pl-10 p-4">
        <h1 className="text-3xl md:text-2xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
};

const Ipmreq = () => {
  return (
    <>
      <section className="bg-primary p-5 sm:p-8 md:p-10 flex justify-end items-center clip-path-polygon-shape relative">
        <div className="flex items-center flex-row-reverse h-64 sm:h-72 md:h-80 lg:h-96">
          <img className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto mr-2 sm:mr-3 md:mr-4" src="/logo2.png" alt="NCIP" />
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mr-4 sm:mr-6 md:mr-8 lg:mr-10 font-primary">National Commission of Indigenous Peoples</h1>
        </div>
      </section>
      <div className="bg-white shadow-xl rounded-lg w-full sm:w-3/4 md:w-3/5 lg:w-1/3 mx-auto absolute top-32 sm:top-40 md:top-80 lg:top-80 lg:left-56 p-5 sm:p-7 md:p-10">
        <div className="sm:h-28 md:h-14 lg:h-24 w-full text-black flex flex-col justify-center border border-indigo-800 border-b-0 border-t-0 border-l-8 border-r-0">
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold font-primary">Indigenous Peoples Mandatory Representation</h1>
        </div>
      </div>

      <section className="flex flex-col text-left px-5 sm:px-8 md:px-10 lg:px-12 ml-10 sm:ml-20 md:ml-30 lg:ml-40 mr-10 sm:mr-20 md:mr-30 lg:mr-40 pb-20 sm:pb-30 md:pb-40 lg:pb-50 font-primary">
        <div className="flex items-center mt-5 sm:mt-10">
          <ShieldAlert color="#d10000" />
          <h4 className="ml-2 sm:ml-3 md:ml-4 lg:ml-5 font-medium italic">Note: It is important that you follow all the necessary procedures when applying for an Mandatory Representation of Indigenous
            Peoples in Local Legislative Councils and Policy-making Bodies.</h4>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-10 sm:mt-15 md:mt-20">
          <ul className="flex flex-wrap justify-around font-semibold text-sm sm:text-md md:text-lg">
            <li className="flex items-center hover:text-sky-700">
              <a href="/ipmr/Ipmrprocess">Application Process</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
            <li className="flex items-center hover:text-sky-700">
              <a href="/ipmr/ipmrreq">Requirements</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
            <li className="flex items-center hover:text-sky-700">
              <a href="/ipmr/Ipmrguidelines">Guidelines</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
          </ul>
        </div>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
          Requirements
        </h1>

        <StepInformation title="General Requirements">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            The following shall be the minimum requirements for one to qualify as IPMR:
          </h3>
          <ul className="list-decimal pl-20 pt-5 pr-4 ml-10">
            <li>A bona fide member of the Indigenous Peoples community he/she seeks to represent, supported by a certification from his/her IPS.</li>
            <li className="pt-2">Able to read and write.</li>
            <li className="pt-2">Physically, mentally, and morally fit.</li>
            <li className="pt-2">A natural-born Filipino citizen.</li>
            <li className="pt-2">At least 18 years of age on the date of assumption.</li>
            <li className="pt-2">Such other qualifications that the community may include in their local guidelines.</li>
          </ul>
        </StepInformation>

        <StepInformation title="Special Requirements">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            In addition to the above, an aspiring IPMR should possess the following qualifications:
          </h3>
          <ul className="list-decimal pl-20 pt-5 pr-4 ml-10">
            <li>IPMR in local legislative bodies:</li>
            <ul className="list-disc pt-2 ml-10">
              <li className="pt-2">Conversant with the culture of the community he/she represents.</li>
              <li className="pt-2">A resident in the community for ten (10) years continuously without interruption for the period immediately preceding the time of selection, without prejudice to the community providing the requirement of domicile to its local guidelines.</li>
              <li className="pt-2">A registered voter in the barangay, municipality, city, or province where he or she intends to hold office.</li>
            </ul>
            <li className="pt-5">IPMRs in policy-making bodies:</li>
            <ul className="list-disc pt-2 ml-10">
              <li className="pt-2">At least high school graduate.</li>
              <li className="pt-2">A resident in the barangay, municipality, city, or province where he/she will hold office.</li>
            </ul>
          </ul>
        </StepInformation>
      </section>
    </>
  );
};

export default Ipmreq;
