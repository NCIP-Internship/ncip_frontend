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
    description: "Application and Required Documents",
  },
  {
    Icon: <Activity size={24} />,
    title: "Step 2",
    description: "Exemptional Circumstances",
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
      <section className="bg-primary p-10 flex justify-end items-center clip-path-polygon-shape relative">
        <div className="flex items-center flex-row-reverse h-96">
          <img className="size-60 max-w-full h-auto mr-4" src="/logo2.png" alt="NCIP" />
          <h1 className="text-white text-3xl font-medium mr-10">National Commission of Indigenous Peoples</h1>
        </div>
      </section>
      <div className="bg-white shadow-xl rounded-lg w-full md:w-1/3 mx-auto md:ml-60 absolute top-80 p-10">
        <div className="h-32 w-full text-black flex flex-col justify-center border border-indigo-800 border-b-0 border-t-0 border-l-8 border-r-0">
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
          <li className="flex items-center active:text-sky-700"> <a href="/coc/application-process">
            Application Process </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/coc/requirements">
            Requirements </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/coc/guidelines">
            Guidelines </a> <ChevronRight size="1em" className="ml-2" />
          </li>
        </ul>
      </div>

        <h1 className="font-bold text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
          Application Process
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

        <StepInformation title="Step 1 : Application and Required Documents">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            Application and Required Documents. Personal processing of
            application for COC issuance shall at all times be required. The
            applicant shall complete Index Form-1 and submit the same along with
            the following documents/requirements:
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            a. Certificate of IP Membership or CIPM duly issued by the
            recognized IP Leader/Elder of the community where the applicant is a
            member or claims to be a member
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            b. Properly filled-up genealogical Form 2 that secured from NCIP{" "}
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">
            c. Two copies of “2x2” ID pictures taken at most 6 months prior to
            the application and
          </h3>
          <h3 className="pl-20 pt-5 pr-4 ">d. 2 pcs. Documentary stamps</h3>
        </StepInformation>

        <StepInformation title="Step 2 : Issuance of COCs Under Exceptional Circumstances">
          <h3 className="pl-20 pt-5 pr-4">
            {" "}
            a. Applicants whose immediate family member by descent has a COC
            previously issued by NCIP of the same Region, he/she shall only
            present the said COC together with the completed application form
            and the documents under section 8.1 b, 8.1c and 8.1 d subject for
            validation and certification from concerned Provincial Office;{" "}
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            b. Individuals who were previously issued COC validated by the NCIP
            may request a copy of the same without having to submit the
            requirement in Section 8.1.a and b. Provided that the new copy being
            issued may be for another purpose as requested by the individual.{" "}
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            c. In cases where the applicant is included in the CADT List of
            claimants, the CIPM is not required. Instead a certification from
            the concerned provincial officer or service center head with no
            provincial office that he/she is officially included in the CADT
            List of Claimants indicating the page number shall suffice citing
            the CADT number, page number and volume number of the recognition
            book
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            d. In exceptional circumstances where the applicant has proof of IP
            membership but is not covered under this guidelines, the applicant
            may file a petition with the OEHR for issuance of COC.
          </h3>
        </StepInformation>

        <StepInformation title="Step 3 : Evaluation">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            Upon receipt of the application and attached documents/requirements,
            the COC Focal Person/Committee at the NCIP receiving office shall
            evaluate the application within three Upon receipt of the
            application and attached documents/requirements, the COC Focal
            Person/Committee at the NCIP receiving office shall evaluate the
            application within three working days to: working days to:{" "}
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            a. Examine the submitted documents as to its completeness
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            b. Compare the CIPM signatories to the existing list of NCIP
            recognized IP Leader/Elder
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            c. Review the Recognition book if the applicant is a member of an
            ICC/IP group whose ancestral domain has already been issued a
            certificate of ancestral domain title or CADT to validate membership
            of the applicant in the ICC/IP group. If the applicant is not
            included in the recognition book, but is found to be an actual owner
            of a portion of the domain the certifying IP Leader/Elder shall
            provide written explanation why the applicant is not included in the
            recognition book. The written explanation can be the basis for
            denial or acceptance. Should the explanation be accepted the region
            shall process the inclusion of the applicants to the recognition
            book with the approval from the Commission, and{" "}
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            d. If the application documents is found in order, endorse to the
            Provincial Officers/Regional Directors, otherwise if found defective
            or insufficient return the application documents to the applicant
            with appropriate instruction and guidance.
          </h3>
        </StepInformation>

        <StepInformation title="Ste 4 : Review and Verification">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            Upon receipt of the favorable endorsement of the COC Focal
            Person/Committee, the NCIP CSC Head/Provincial Officer/Regional
            Director, as provided for in Section 6 & 7 Part II, shall review
            the:{" "}
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            a. List of recognized IP Elders/Leaders that have authority to issue
            CIPM to validate the identity and signature of the Elder/Leader.
          </h3>
          <h3 className="pl-20 pt-5 pr-4">
            b. Recognition book to validate membership of the applicant in the
            ICC/IP group.
          </h3>
        </StepInformation>

        <StepInformation title="Step 5 : Issuance of COC">
          <h3 className="pl-20 pt-5 pr-4">
            Upon findings by the CSC Head City/Provincial Officer/Regional
            Director, as the case may be, that the application is complete and
            meritorious, he/she shall issue a COC within two (2) working days.
            The COC shall only be released to the COC applicant or his duly
            authorized representative.
          </h3>
        </StepInformation>

      </section>
    </>
  );
};

export default ApplicationProcess;
