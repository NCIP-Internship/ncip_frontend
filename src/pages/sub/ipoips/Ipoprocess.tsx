import Navbar from "@/components/Templates/Header/Navbar";
import {
  BookText,
  Activity,
  User,
  Target,
  ShieldCheck,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { nanoid } from "nanoid";
import { ReactNode } from "react";


const Card = ({
  Icon,
  title,
  description,
}: {
  Icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-blue-50 border border-gray-400 aspect-square w-60 rounded relative flex-shrink-1 ">
      <div className="absolute top-2 left-2 text-xs">{Icon}</div>
      <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2 ">
        <h3 className="text-[9px] font-semibold text-blue-500 md:text-base">
          {title}
        </h3>
        <h1 className="text-[9px] md:text-lg font-bold">{description}</h1>
      </div>
    </div>
  );
};

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
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
};

const cardData: Array<{
  Icon: JSX.Element;
  title: string;
  description: string;
}> = [
  {
    Icon: <BookText size={24} />,
    title: "Step 1",
    description: "Registration and Required Documents",
  },
  {
    Icon: <Activity size={24} />,
    title: "Step 2",
    description: "Filing Application",
  },
  {
    Icon: <User size={24} />,
    title: "Step 3",
    description: "Verification and Evaluation",
  },
  {
    Icon: <Target size={24} />,
    title: "Step 4",
    description: "Issuance and Release",
  },
];

export const Ipoprocess = () => {
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
          <h1 className="text-2xl font-bold ml-2">Indigenous Peoples Organization and Indigenous political structures</h1>
        </div> 
      </div>


      <section className="flex flex-col text-left px-5 md:px-10 lg:px-20 ml-40 mr-40 pb-40">
      <div className="flex items-center mt-10">
        <ShieldAlert color="#d10000" />
        <h4 className=" ml-2 font-medium italic">Note: It is important that you follow all the necessary procedures when applying for confirmation of Indigenous political structures and the registration of Indigenous People Organizations.</h4>
      </div>

      <div className="w-1/3 mt-20">
        <ul className="flex justify-around font-semibold text-lg">
          <li className="flex items-center active:text-sky-700"> <a href="/ipoips/Ipoprocess">
            Registration Process </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/ipoips/Iporequirements">
            Requirements </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/ipoips/Ipoguidelines">
            Guidelines </a> <ChevronRight size="1em" className="ml-2" />
          </li>
        </ul>
      </div>

        <h1 className="font-bold text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
          Registration Process
        </h1>

        {/* Line */}
        <div className="flex items-center pt-20">
          <div className="bg-blue-400 w-4 h-4 rounded-full"></div>
          <hr className="flex-grow border-t-2 border-blue-600" />
          <div className="bg-blue-400 w-4 h-4 rounded-full"></div>
        </div>

        <div className="flex md:pt-10 justify-between md:justify-around">
          {cardData.map((card) => (
            <Card
              key={nanoid()}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Spacer */}
        <div className="mt-6 md:mt-16" />

        <StepInformation title="Step 1 : Registration and Required documents">
          <h3 className="pl-20 pt-5 pr-4">
          The application for confirmation initiated by the IPS itself shall be 
          filed by the elders/leaders with the nearest NCIP Provincial Office (PO) or the Community 
          Service Center (CSC) in the absence of a Provincial Office,  supported by the requirements 
          provided in Section 12 hereof. 
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
          Notices shall be issued by the 
          concerned NCIP Regional Office for them to comply with the requirements of this 
          Guidelines; 
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
          IPOs may be organized outside 
          ancestral domains and can register with the NCIP after compliance with the requirements 
          provided in this Guidelines. 
          </h3>
        </StepInformation>

        <StepInformation title="Step 2 : Filing Application">
          <h3 className="pl-20 pt-5 pr-4">
          Filing of the application registration shall be made with 
          nearest Provincial Office or Community Service Center in the absence of a Provincial Office. The 
          authorized representative shall submit three (3) complete and duly accomplished sets, one (1) 
          original and two (2) duplicate copies. Copies of the application shall be for the applicant IPs, the 
          concerned CSC, and the OEHR for database and monitoring.
          </h3>
        </StepInformation>

        <StepInformation title="Step 3 : Verification and Evaluation">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
          The verification and validation shall be conducted in 
          the following manner:
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
          1. The application for confirmation of IPS and/or registration of IPO shall be submitted to the 
          PO or CSC, which shall immediately furnish a copy to the Regional Office.  It shall conduct 
          an evaluation of all submitted requirements within ten (10) days   upon receipt of the 
          application. The evaluation is to be conducted by gathering secondary data, interviews or 
          other means with the applicant leaders/elders of the IPS and other key informants. 
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
          The evaluation shall serve as basis for an assessment of the authenticity of the application 
          and/or for requesting additional requirements and other relevant information to be 
          provided by the applicant.
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
          If assessed to be authentic, the applicant, upon receipt of the assessment shall, with the 
          assistance of NCIP, complete all relevant information.  If found to be dubious or 
          fraudulent, the NCIP shall deny the application and give notice with an explanation of the 
          basis to the applicant. 
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
          2. If necessary, the evaluation shall be followed by the conduct of field-based verification by 
          the Verification and Validation Team (VVT), which shall be constituted by the Provincial 
          Office or CSC Head. The verification/validation shall be undertaken within fifteen (15) 
          days; 
          </h3>

          <h3 className="pl-20 pt-5 pr-4">
          3. After the evaluation or field verification and validation, the VVT shall submit its  report  
            with recommendations, if any, to the PO or CSC Head, copy furnished the applicant.  If 
            satisfied, the PO or CSC Head shall make his/her endorsement to the RD, through the 
            Chief, Technical Management Services Division, copy furnished the Commissioner from 
            the Ethnographic Region, for review and appropriate action. 
          </h3>

          <h3 className="pl-20 pt-5 pr-4">
          If after reviewing the report and the RD finds the same incomplete,  he/she  shall return 
          the same to the PO or CSC Head,  as the case may be,  for completion.  If he/she finds the 
          application fraudulent, he/she shall endorse the same to the Regional Attorney for 
          investigation and recommendation.
          </h3>

          <h3 className="pl-20 pt-5 pr-4">
          4. In the case of the Registration of IPOs,  the RD shall  review the report and if he/she finds 
          the same to be meritorious, a COR  shall be issued to the applicant IPO and copies 
          furnished to the Commission through the OEHR;
          </h3>

          <h3 className="pl-20 pt-5 pr-4">
          5. In the case of an application of an IPS for Confirmation, the RD shall review the report and 
          after finding the same to be meritorious, with the concurrence of the Commissioner from 
          the Ethnographic Region, he/she shall endorse the same to the NCIP, through the OEHR, 
          for appropriate action.
          </h3>
        </StepInformation>

        <StepInformation title="Ste 4 : Issuance and Release">
          <h3 className="pl-20 pt-5 pr-4">
          Issuance and Release of En Banc Resolution and Certificate of Confirmation.   
          The En Banc Resolution and Certificate of Confirmation shall be issued, through the OEHR, to 
          the applicant IPS and copies thereof be furnished to the concerned offices. 
           </h3>
        </StepInformation>

        {/* <div className="fixed bottom-0 right-0 p-4">
          <Link
            to="/"
            className="text-blue-500 font-semibold text-lg flex items-center p-2 bg-white rounded shadow-md"
          >
            Download Required Documents
            <ArrowRight size={24} className="ml-2" />
          </Link>
        </div> */}

      </section>
    </>
  );
};

export default Ipoprocess;
