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

const Iporequirements = () => {
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
          <li className="flex items-center hover:text-sky-700"> <a href="/ipoips/Ipoprocess">
            Application Process </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center"> <a href="/ipoips/Iporequirements">
            Requirements </a> <ChevronRight size="1em" className="ml-2" />
          </li>
          <li className="flex items-center hover:text-sky-700"> <a href="/ipoips/Ipoguidelines">
            Guidelines </a> <ChevronRight size="1em" className="ml-2" />
          </li>
        </ul>
      </div>

      <h1 className="font-bold text-3xl lg:text-5xl flex flex-col justify-center items-start pt-12 lg:pt-20 mt-20">
      Requirements 
        </h1>

        <StepInformation title=" The following documents shall be required for the processing of the Confirmation of IPS:">
                <h3 className="pl-20 pt-5 pr-4 ">
                    1. A Genealogical Survey
                </h3>
                <h3 className="pl-20 pt-5 pr-4">
                    2. Written accounts not limited to customs and traditions including the interfaced  
                    customary practices on the following: <br />
                    <span className="block pl-6 pt-4">2.a Social organization- a profile of the IPS including  information on       
                    traditional 
                    and emerging elders/leaders; norms and social stratification based on access to 
                    prestige and power; succession (birthright); the leadership structure including 
                    the roles and functions of the elders/leaders  of  the  IPS</span>
                    <span className="block pl-6 pt-4">2.b Basic social processes:</span>
                    <span className="block pl-10 pt-4">2.b.1. Dispute resolution and conflict management.</span>
                    <span className="block pl-10 pt-4">2.b.2. Consensus-building and decision-making processes towards cooperation, unity, and harmony.</span>
                    <span className="block pl-10 pt-4">2.b.3. Mutual help and defense systems.</span>
                    <span className="block pl-10 pt-4">2.b.4. Specialized functions in relation to observance of rituals.</span>

                    <span className="block pl-6 pt-4">2.c Access to resources: </span>
                    <span className="block pl-10 pt-2">2.c.1. Applicable community imperatives in accordance with customary     
                    law 
                    as well as on the access and benefit-sharing agreements/wealth 
                    management  on  resources</span>
                    <span className="block pl-10 pt-4">2.c.2. Monitoring and evaluation as well as indicators  on sustainable d
                    development of resources</span>
                    <span className="block pl-10 pt-4">2.c.3. Role of women in the sustainable development of the domain.</span>
                </h3>
                <h3 className="pl-20 pt-5 pr-4 ">
                    3. Written and verified oral accounts of customs and traditions on governance system and 
                    how these have responded to the changing socio-political order; and
                </h3>
                <h3 className="pl-20 pt-5 pr-4 ">
                    4. Other relevant anthropological/historical data. 
                     </h3>
        </StepInformation>

        <StepInformation title="Registration Requirements for IPOs">
                <h3 className="pl-20 pt-5 pr-4 ">
                    To be officially recognized, the IPS or the 
                    IPO under its direction shall apply for registration with the NCIP and shall submit the following: 
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    1. Resolution stating to the effect  that  they are affirming that the applicant  being 
                    registered is their duly organized IPO, which Resolution  must contain the following 
                    information:  <br />
                    <span className="block pl-6 pt-4">1.a Purposes and goal of the IPO in relation to the collective aspiration of ICCs/IPs</span>
                    <span className="block pl-6 pt-4">1.b Target beneficiaries</span>
                    <span className="block pl-6 pt-4">1.c Roles and functions of IPO and IPS  as far as coordination on working relations</span>
                    <span className="block pl-6 pt-4">1.d Location and area of operations</span>
                    <span className="block pl-6 pt-4">1.e Targeted major programs, activities and projects of the IPO</span>
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    2. Duly accomplished NCIP Application Form for registration signed by   
                        authorized representative of the IPS
            
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    3. Profile indicating the qualifications of  the IPO leader/Chairperson which includes,  
                    but not limited to,  the following;  <br />
                    <span className="block pl-6 pt-4">3.a Proof of Tribal Membership</span>
                    <span className="block pl-6 pt-4">3.b Proof of actual  residence in the domain/land for at least five (5)    immediately preceding his/her selection</span>
                    <span className="block pl-6 pt-4">3.c Resolution/affirmation by the ICCs/IPs endorsing  years that he/she is a practitioner/advocate of the customs and traditions; and narrative of his/her advocacy and struggle on IP rights;</span>
                    <span className="block pl-6 pt-4">3.d Public knowledge of skills/expertise necessary to carry out the the IPO. </span>
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    4. Written internal rules prescribing regulations binding the officer and members in 
                    accordance  with  the  objectives of the  IPO  <br />
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    5. Grounds for voluntary dissolution of the IPO which are not limited to the following  <br />
                    <span className="block pl-6 pt-4">5.a If it fails to adopt its written internal rules  by resolution within 30 days    from 
                                    filing of its application as provided in this Guidelines</span>
                    <span className="block pl-6 pt-4">5.b Filing by the IPO, with the consent of the IPS, a petition with the NCIP  to shorten its term</span>
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    6. Complaints mechanism and/or grievance procedure  <br />
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    7. List of officers/leaders and members <br />
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    8. Latest Audited Financial Statement  <br />
                </h3>

                <h3 className="pl-20 pt-5 pr-4">
                    9. Other relevant requirements at the discretion of the NCIP Community Service Center 
                    (CSC) Head/Provincial Officer (PO)/Regional Director (RD)/Commissioner of the 
                    Ethnographic Region  <br />
                </h3>
        </StepInformation>

        <button className="w-64 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-20 ml-20">
              Donwnload Required Documents <SquareArrowDown className="ml-2" />
        </button>


      </section>
    </>
  );
};

export default Iporequirements;
