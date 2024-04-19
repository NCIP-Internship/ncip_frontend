import { Hrline } from "../Coc-Process/Hrline";
import { ReqBtn } from "./ReqBtn";
import { BookText, Activity, User, Target, ShieldCheck } from 'lucide-react';

export const CocApp = () => {
    return (
      <>
      <h1 className="font-bold text-5xl flex flex-col justify-center items-start pl-20 pt-10">Application Process</h1>
      <h3 className="font-medium text-xl flex flex-col justify-center items-start pl-20 pt-5">Navigate through the essential steps for applying for Authenticity and Ethnicity as an Indigenous People. </h3>
      <Hrline />

      <div className="flex flex-wrap justify-center gap-20 md:justify-start md:pl-20 md:pr-20 md:pt-10">
            <div className="bg-blue-50 border border-gray-400 w-60 h-60 rounded relative flex-shrink-0">
                <div className="absolute top-2 left-2">
                    <BookText size={24}/>
                </div>
                <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
                    <h3 className="font-semibold text-blue-500">Step 1</h3>
                    <h1 className="text-xl font-bold">Application and Required Documents</h1>
                </div>
            </div>
    
            <div className="bg-blue-50 border border-gray-400 w-60 h-60 rounded relative flex-shrink-0 ">
                <div className="absolute top-2 left-2">
                    <Activity size={24} />
                </div>
                <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
                    <h3 className="font-semibold text-blue-500">Step 2</h3>
                    <h1 className="text-xl font-bold">Exemptional Circumstances</h1>
                </div>
            </div>

            <div className="bg-blue-50 border border-gray-400 w-60 h-60 rounded relative flex-shrink-0 ">
                <div className="absolute top-2 left-2">
                    <User size={24} />
                </div>
                <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
                    <h3 className="font-semibold text-blue-500">Step 3</h3>
                    <h1 className="text-xl font-bold">Evaluation</h1>
                </div> 
            </div>

            <div className="bg-blue-50 border border-gray-400 w-60 h-60 rounded relative flex-shrink-0 ">
                <div className="absolute top-2 left-2">
                    <Target size={24} />
                </div>
                <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
                    <h3 className="font-semibold text-blue-500">Step 4</h3>
                    <h1 className="text-xl font-bold">Review and Verification</h1>
                </div>
            </div>

            <div className="bg-blue-50 border border-gray-400 w-60 h-60 rounded relative flex-shrink-0 ">
                <div className="absolute top-2 left-2">
                    <ShieldCheck size={24} />
                </div>
                <div className="absolute bottom-2 left-2 pl-2 pr-2 pb-2">
                    <h3 className="font-semibold text-blue-500">Step 5</h3>
                    <h1 className="text-xl font-bold">Issuance of COC</h1>
                </div>
            </div>
        </div>

            <div className="flex flex-col justify-center items-start pl-20 pr-20 pt-40">
                <div className="border border-blue-600 border-l-8 rounded-r-lg pl-10 p-4">
                    <h1 className="text-2xl font-bold">Step 1 : Application and Required Documents</h1>
                </div>
                <h3 className="pl-20 pt-5 pr-4 font-bold">Application and Required Documents. Personal processing of application for COC  issuance shall at all times be required.  The applicant shall complete Index Form-1 and submit the same along with the following  documents/requirements:</h3>
                <h3 className="pl-20 pt-5 pr-4 ">a. Certificate of IP Membership or CIPM duly issued by the recognized IP Leader/Elder of  the community where the applicant is a member or claims to be a member</h3>
                <h3 className="pl-20 pt-5 pr-4 ">b. Properly filled-up genealogical Form 2 that secured from NCIP </h3>
                <h3 className="pl-20 pt-5 pr-4 ">c. Two copies of “2x2” ID pictures taken at most 6 months prior to the application and</h3>
                <h3 className="pl-20 pt-5 pr-4 ">d. 2 pcs. Documentary stamps</h3>
            </div>

            <div className="flex flex-col justify-center items-start pl-20 pr-20 pt-20">
                <div className="border border-blue-600 border-l-8 rounded-r-lg pl-10 p-4">
                    <h1 className="text-2xl font-bold">Step 2 :  Issuance of COCs Under Exceptional Circumstances</h1>
                </div>               
                <h3 className="pl-20 pt-5 pr-4"> a. Applicants whose immediate family member by descent has a COC previously issued  by NCIP of the same Region, he/she shall only present the said COC together with the  completed application form and the documents under section 8.1 b, 8.1c and 8.1 d  subject for validation and certification from concerned Provincial Office; </h3>
                <h3 className="pl-20 pt-5 pr-4">b. Individuals who were previously issued COC validated by the NCIP may request a  copy of the same without having to submit the requirement in Section 8.1.a and b.  Provided that the new copy being issued may be for another purpose as requested by  the individual.  </h3>
                <h3 className="pl-20 pt-5 pr-4">c. In cases where the applicant is included in the CADT List of claimants, the CIPM is  not required. Instead a certification from the concerned provincial officer or service  center head with no provincial office that he/she is officially included in the CADT  List of Claimants indicating the page number shall suffice citing the CADT number,  page number and volume number of the recognition book</h3>
                <h3 className="pl-20 pt-5 pr-4">d. In exceptional circumstances where the applicant has proof of IP membership but is  not covered under this guidelines, the applicant may file a petition with the OEHR for  issuance of COC.</h3>
            </div>

            <div className="flex flex-col justify-center items-start pl-20 pr-20 pt-20">
                <div className="border border-blue-600 border-l-8 rounded-r-lg pl-10 p-4">
                    <h1 className="text-2xl font-bold">Step 3 : Evaluation </h1>
                </div>
                <h3 className="pl-20 pt-5 pr-4 font-bold">Upon receipt of the application and attached documents/requirements,  the COC Focal Person/Committee at the NCIP receiving office shall evaluate the  application within three Upon receipt of the application and attached documents/requirements,  the COC Focal Person/Committee at the NCIP receiving office shall evaluate the  application within three working days to:  working days to:  </h3>
                <h3 className="pl-20 pt-5 pr-4">a. Examine the submitted documents as to its completeness</h3>
                <h3 className="pl-20 pt-5 pr-4">b. Compare the CIPM signatories to the existing list of NCIP recognized IP Leader/Elder</h3>
                <h3 className="pl-20 pt-5 pr-4">c. Review the Recognition book if the applicant is a member of an ICC/IP group whose  ancestral domain has already been issued a certificate of ancestral domain title  or CADT to validate membership of the applicant in the ICC/IP group. If the applicant  is not included in the recognition book, but is found to be an actual owner of a portion  of the domain the certifying IP Leader/Elder shall provide written explanation why  the applicant is not included in the recognition book. The written explanation can  be the basis for denial or acceptance. Should the explanation be accepted the region  shall process the inclusion of the applicants to the recognition book with the approval  from the Commission, and </h3>
                <h3 className="pl-20 pt-5 pr-4">d. If the application documents is found in order, endorse to the Provincial  Officers/Regional Directors, otherwise if found defective or insufficient return the  application documents to the applicant with appropriate instruction and guidance.</h3>
            </div>

            <div className="flex flex-col justify-center items-start pl-20 pr-20 pt-20">
                <div className="border border-blue-600 border-l-8 rounded-r-lg pl-10 p-4">
                    <h1 className="text-2xl font-bold">Step 4 : Review and Verification</h1>
                </div>
                <h3 className="pl-20 pt-5 pr-4 font-bold">Upon receipt of the favorable endorsement of the COC  Focal Person/Committee, the NCIP CSC Head/Provincial Officer/Regional Director,  as provided for in Section 6 & 7 Part II, shall review the: </h3>
                <h3 className="pl-20 pt-5 pr-4">a. List of recognized IP Elders/Leaders that have authority to issue CIPM to validate the  identity and signature of the Elder/Leader.</h3>
                <h3 className="pl-20 pt-5 pr-4">b. Recognition book to validate membership of the applicant in the ICC/IP group.</h3>
            </div>

            <div className="flex flex-col justify-center items-start pl-20 pr-20 pt-20 pb-40">
                <div className="border border-blue-600 border-l-8 rounded-r-lg pl-10 p-4">
                    <h1 className="text-2xl font-bold">Step 5 : Issuance of COC</h1>
                </div>
                <h3 className="pl-20 pt-5 pr-4">Upon findings by the CSC Head City/Provincial Officer/Regional  Director, as the case may be, that the application is complete and meritorious, he/she  shall issue a COC within two (2) working days. The COC shall only be released to  the COC applicant or his duly authorized representative.</h3>
            </div>

            <ReqBtn/>
      </>
    );
  };