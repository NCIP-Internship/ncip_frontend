import Navbar from "@/components/Templates/Header/Navbar";
import {
  BookText,
  Activity,
  User,
  Target,
  ShieldAlert,
  ChevronRight,
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
    <div className="bg-blue-50 border border-gray-400 aspect-square w-60 rounded relative flex-shrink-1">
      <div className="absolute top-2 left-2 text-xs">{Icon}</div>
      <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
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
    title: "",
    description: "Coverage",
  },
  {
    Icon: <Activity size={24} />,
    title: "",
    description: "Duties",
  },
  {
    Icon: <User size={24} />,
    title: "",
    description: "Selection",
  },
  {
    Icon: <Target size={24} />,
    title: "",
    description: "Term of Office",
  },
];

export const Ipmrprocess = () => {
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
          Selection Process
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

        <StepInformation title="Coverage">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            The Representation of ICCs/IPs shall be in accordance with the following:
          </h3>
          <ul className="list-decimal pl-20 pt-5 pr-4 ml-10">
            <li>Where there exists an AD/AL in a given LGU, IP representation is mandatory. The IPMR shall be selected from qualified traditional or actual owners/rights holders of the AD/AL whether or not with issued CADT, like Baguio City, Davao City, and other similarly situated LGUs.</li>
            <li className="pt-5">Where there are no ancestral domains/ancestral land, the rule on the threshold applies. This is determined by the total population of an LGU divided by the number of the Sangguniang members as prescribed in the Local Government Code, with the result/quotient to serve as the minimum number to be met by an ICC/IP population in such LGU to qualify an IP Mandatory Representative for a seat in the Sangguniang.</li>
            <li className="pt-5">Where the situations in paragraphs a and b above are not obtaining, the concerned LGU may still allow representation in accordance with the Guidelines upon the initiative of ICCs/IPs therein.</li>
            <li className="pt-5">In situations where resettled and migrant IPs, who are residing in the AD/AL for more than ten (10) years, exceed the number of the AD/AL owners, the former may participate in the drafting of the local guidelines and be included as nominees for consideration in the selection process. Provided that, the concerned NCIP Regional Office, through their field offices, shall assist in the formulation of local guidelines to safeguard the rights of the AD owners to their AD and protect the primacy of their customary laws. Provided further, that a term agreement may be arranged that the ICCs/IPs may deem suited and applicable to address the cultural peculiarities in a given LGU ensuring however, that the term agreement does not affect the term of 3 years. In order to be included, the resettled and migrant IPs shall make known their intention by filing a petition with the community, through the IPS, copy furnished the NCIP field offices. For the purposes of determining whether or not the resettled and/or migrant IPs comply with the population and residency requirements, a census shall be conducted by the concerned CSC or PO. In case of cities without field offices, the Region shall direct the appropriate unit/office to facilitate the conduct of census.</li>
          </ul>
        </StepInformation>

        <StepInformation title="Duties">
          <h3 className="pl-20 pt-5 pr-4 font-bold">
            The authority of the IPMR emanates from the community through the indigenous Political Structure. As a regular member of the Local Legislative Councils, and Policy-Making Bodies, it is the primary duty of the IPMR to carry out all times the collective interests and aspirations of the community. To accomplish the foregoing, the IPMR shall:
          </h3>
          <ul className="list-decimal pl-20 pt-5 pr-5 ml-10">
            <li>Formulate the IP Agenda in consultation with the concerned community ICCs/IPs and coordinate the same with the IPS.</li>
            <li className="pt-5">Deliver regular accomplishment reports to the community and submit a copy to the Council of Elders/Leaders.</li>
            <li className="pt-5">Actively participate in the development, review, and update of the community plans (i.e. Ancestral Domain Sustainable Development and Protection Plan, Community Development Plan, etc.), and local plans (i.e. Comprehensive Land Use Plan, Comprehensive Development Plan, Annual Investment Plan, etc.) in accordance with pertinent laws, rules, and regulations.</li>
            <li className="pt-5">Actively participate in the development, review, and update of the community plans (i.e. Ancestral Domain Sustainable Development and Protection Plan, Community Development Plan, etc.), and local plans (i.e. Comprehensive Land Use Plan, Comprehensive Development Plan, Annual Investment Plan, etc.) in accordance with pertinent laws, rules, and regulations.</li>
            <li className="pt-5">Abide by the rules of procedures of the legislative/policy-making body.</li>
            <li className="pt-5">Respect the religious belief of others and adhere to one’s belief without using it as a propaganda to advance one’s political interest.</li>
            <li className="pt-5">Keep the confidentiality of classified information.</li>
            <li className="pt-5">Participate in other committees of the local legislative councils and policy-making bodies with the guidance of the concerned community ICCs/IPs.</li>
            <li className="pt-5">Ensure the integrity of the Ancestral Domain and its sustainable development and protection through the enactment of legislative measures, policies, and programs.</li>
            <li className="pt-5">Comply with all applicable laws, rules, regulations, and other relevant issuances of the NCIP and other Government Agencies.</li>
          </ul>
        </StepInformation>
      </section>
    </>
  );
};

export default Ipmrprocess;
