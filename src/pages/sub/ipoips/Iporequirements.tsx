import Navbar from "@/components/Templates/Header/Navbar";
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
      <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
};

const Iporequirements = () => {
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

        <h1 className="font-bold text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
          Requirements
        </h1>

        <StepInformation title="The following documents shall be required for the processing of the Confirmation of IPS:">
          <ul className="list-decimal pl-20 pt-5 pr-4">
            <li>A Genealogical Survey</li>
            <li className="pt-2">
              Written accounts not limited to customs and traditions including the interfaced customary practices on the following:
              <ul className="ml-5 pt-5 pr-4">
                <li className="font-bold">Social Organization
                  <ul className="list-disc ml-5 pr-4 font-normal">
                    <li className="pt-2">
                      A profile of the IPS including information on traditional and emerging elders/leaders; norms and social stratification based on access to prestige and power; succession (birthright); the leadership structure including the roles and functions of the elders/leaders of the IPS
                    </li>
                  </ul>
                </li>
                <li className="pt-5 font-bold">Basic Social Processes
                  <ul className="ml-5 pr-4 list-disc font-normal">
                    <li className="pt-2">Dispute resolution and conflict management.</li>
                    <li>Consensus-building and decision-making processes towards cooperation, unity, and harmony.</li>
                    <li>Mutual help and defense systems.</li>
                    <li>Specialized functions in relation to observance of rituals.</li>
                  </ul>
                </li>
                <li className="pt-5 font-bold">Access to Resources
                  <ul className="ml-5 pr-4 list-disc font-normal">
                    <li className="pt-2">Applicable community imperatives in accordance with customary law as well as on the access and benefit-sharing agreements/wealth management on resources</li>
                    <li>Monitoring and evaluation as well as indicators on sustainable development of resources</li>
                    <li>Role of women in the sustainable development of the domain.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="pt-2">
              Written and verified oral accounts of customs and traditions on governance system and how these have responded to the changing socio-political order and
            </li>
            <li className="pt-2">Other relevant anthropological/historical data.</li>
          </ul>
        </StepInformation>

        <StepInformation title="Registration Requirements for IPOs">
          <h3 className="pl-20 pt-5 pr-4">
            To be officially recognized, the IPS or the IPO under its direction shall apply for registration with the NCIP and shall submit the following:
          </h3>
          <ul className="list-decimal pl-20 pt-5 pr-4">
            <li>
              Resolution stating to the effect that they are affirming that the applicant being registered is their duly organized IPO, which Resolution must contain the following information:
              <ul className="ml-5 pr-4 list-disc">
                <li className="pt-2">Purposes and goal of the IPO in relation to the collective aspiration of ICCs/IPs</li>
                <li>Target beneficiaries</li>
                <li>Roles and functions of IPO and IPS as far as coordination on working relations</li>
                <li>Location and area of operations</li>
                <li>Targeted major programs, activities and projects of the IPO</li>
              </ul>
            </li>
            <li className="pt-2">Duly accomplished NCIP Application Form for registration signed by authorized representative of the IPS</li>
            <li className="pt-2">
              Profile indicating the qualifications of the IPO leader/Chairperson which includes but not limited to the following:
              <ul className="ml-5 pr-4 list-disc">
                <li className="pt-2">Proof of Tribal Membership</li>
                <li>Proof of actual residence in the domain/land for at least five (5) years immediately preceding his/her selection</li>
                <li>
                  Resolution/affirmation by the ICCs/IPs endorsing years that he/she is a practitioner/advocate of the customs and traditions; and narrative of his/her advocacy and struggle on IP rights
                </li>
                <li>Public knowledge of skills/expertise necessary to carry out the IPO</li>
              </ul>
            </li>
            <li className="pt-2">Written internal rules prescribing regulations binding the officer and members in accordance with the objectives of the IPO</li>
            <li className="pt-2">
              Grounds for voluntary dissolution of the IPO which are not limited to the following:
              <ul className="ml-5 pr-4 list-disc">
                <li className="pt-2">
                  If it fails to adopt its written internal rules by resolution within 30 days from filing of its application as provided in this Guidelines
                </li>
                <li>Filing by the IPO, with the consent of the IPS, a petition with the NCIP to shorten its term</li>
              </ul>
            </li>
            <li className="pt-2">Complaints mechanism and/or grievance procedure</li>
            <li className="pt-2">List of officers/leaders and members</li>
            <li className="pt-2">Latest Audited Financial Statement</li>
            <li className="pt-2">
              Other relevant requirements at the discretion of the NCIP Community Service Center (CSC) Head/Provincial Officer (PO)/Regional Director (RD)/Commissioner of the Ethnographic Region
            </li>
          </ul>
        </StepInformation>

        <a
          href="/files/ipo-application-form.docx"
          download
          className="w-64 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-20 ml-20"
        >
          Download Documents <SquareArrowDown className="ml-2" />
        </a>
      </section>
    </>
  );
};

export default Iporequirements;
