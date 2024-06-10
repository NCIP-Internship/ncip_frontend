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
    <div className="bg-blue-50 border border-gray-400 aspect-square w-40 sm:w-52 md:w-60 lg:w-72 rounded relative flex-shrink-1">
      <div className="absolute top-2 left-2 text-xs">{Icon}</div>
      <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-blue-500">
          {title}
        </h3>
        <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold">
          {description}
        </h1>
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
    <div className="flex flex-col justify-center items-start pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="rounded-r-lg pl-4 sm:pl-6 md:pl-8 lg:pl-10 p-2 sm:p-3 md:p-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          {title}
        </h1>
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
    description: "Application and Required Documents",
  },
  {
    Icon: <Activity size={24} />,
    title: "Step 2",
    description: "Exceptional Circumstances",
  },
  {
    Icon: <User size={24} />,
    title: "Step 3",
    description: "Evaluation",
  },
  {
    Icon: <Target size={24} />,
    title: "Step 4",
    description: "Review and Verification",
  },
  {
    Icon: <ShieldCheck size={24} />,
    title: "Step 5",
    description: "Issuance of COC",
  },
];

export const ApplicationProcess = () => {
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
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold font-primary">Certificate of Confirmation</h1>
        </div>
      </div>

      <section className="flex flex-col text-left px-5 sm:px-8 md:px-10 lg:px-12 ml-10 sm:ml-20 md:ml-30 lg:ml-40 mr-10 sm:mr-20 md:mr-30 lg:mr-40 pb-20 sm:pb-30 md:pb-40 lg:pb-50 font-primary">
        <div className="flex items-center mt-5 sm:mt-10">
          <ShieldAlert color="#d10000" />
          <h4 className="ml-2 sm:ml-3 md:ml-4 lg:ml-5 font-medium italic">Note: It is important that you follow all the necessary procedures when applying for an authentic ethnic identity as an Indigenous person.</h4>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-10 sm:mt-15 md:mt-20">
          <ul className="flex flex-wrap justify-around font-semibold text-sm sm:text-md md:text-lg">
            <li className="flex items-center hover:text-sky-700">
              <a href="/coc/application-process">Application Process</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
            <li className="flex items-center hover:text-sky-700">
              <a href="/coc/requirements">Requirements</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
            <li className="flex items-center hover:text-sky-700">
              <a href="/coc/guidelines">Guidelines</a>
              <ChevronRight size="1em" className="ml-1 sm:ml-2" />
            </li>
          </ul>
        </div>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
          Application Process
        </h1>

        {/* Line */}
        <div className="flex items-center pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="bg-blue-400 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
          <hr className="flex-grow border-t-2 border-blue-600" />
          <div className="bg-blue-400 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row md:pt-10 justify-between md:justify-around">
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

        <StepInformation title="Step 1 : Application and Required Documents">
          <h3 className="pl-5 sm:pl-10 md:pl-20 pt-5 pr-2 sm:pr-3 md:pr-4 font-bold">
            Application and Required Documents. Personal processing of application for COC issuance shall at all times be required. The applicant shall complete Index Form-1 and submit the same along with the following documents/requirements:
          </h3>
          <ul className="list-disc pl-5 sm:pl-10 md:pl-20 pt-2 sm:pt-3 md:pt-4 pr-2 sm:pr-3 md:pr-4">
            <li className="ml-5 sm:ml-6 md:ml-10">Certificate of IP Membership or CIPM duly issued by the recognized IP Leader/Elder of the community where the applicant is a member or claims to be a member</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">Properly filled-up genealogical Form 2 that secured from NCIP</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">Two copies of “2x2” ID pictures taken at most 6 months prior to the application</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">2 pcs. Documentary stamps</li>
          </ul>
        </StepInformation>

        <StepInformation title="Step 2 : Issuance of COCs Under Exceptional Circumstances">
          <ul className="list-disc pl-5 sm:pl-10 md:pl-20 pt-2 sm:pt-3 md:pt-4 pr-2 sm:pr-3 md:pr-4">
            <li className="ml-5 sm:ml-6 md:ml-10">The Applicant shall submit all documents to the concerned NCIP office</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">The COC application shall be personally processed</li>
          </ul>
        </StepInformation>

        <StepInformation title="Step 3 : Evaluation">
          <ul className="list-disc pl-5 sm:pl-10 md:pl-20 pt-2 sm:pt-3 md:pt-4 pr-2 sm:pr-3 md:pr-4">
            <li className="ml-5 sm:ml-6 md:ml-10">The concerned NCIP Regional Director shall facilitate the evaluation of the submitted documents to the Office of Empowerment and Human Rights or OEHR</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">If documents are verified and validated, the applicant will undergo interview and/or field validation by OEHR staff</li>
          </ul>
        </StepInformation>

        <StepInformation title="Step 4 : Review and Verification">
          <ul className="list-disc pl-5 sm:pl-10 md:pl-20 pt-2 sm:pt-3 md:pt-4 pr-2 sm:pr-3 md:pr-4">
            <li className="ml-5 sm:ml-6 md:ml-10">The NCIP Regional Director shall review and validate the application</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">Upon completion of the review and verification, the RD shall endorse the application to the OEHR Director for final validation</li>
          </ul>
        </StepInformation>

        <StepInformation title="Step 5 : Issuance of COC">
          <ul className="list-disc pl-5 sm:pl-10 md:pl-20 pt-2 sm:pt-3 md:pt-4 pr-2 sm:pr-3 md:pr-4">
            <li className="ml-5 sm:ml-6 md:ml-10">The OEHR shall prepare the Certificate of Confirmation</li>
            <li className="ml-5 sm:ml-6 md:ml-10 pt-2">The applicant shall sign the Certificate of Confirmation</li>
          </ul>
        </StepInformation>
      </section>
    </>
  );
};

export default ApplicationProcess;
