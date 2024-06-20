import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Card = ({
  children,
  order,
  className,
}: {
  children: ReactNode;
  order: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  md:flex-row bg-gainsboro gap-10 p-10 w-[80%] m-auto relative justify-between",
        className,
      )}
    >
      <div
        className="absolute -top-8 -right-8 lg:-top-10 lg:-right-10 bg-yellow-200 rounded-full h-16 w-16 lg:h-20 lg:w-20 flex
        items-center justify-center text-2xl lg:text-4xl text-black"
      >
        {order}
      </div>
      {children}
    </div>
  );
};

export default function Streamlined() {
  const imgStyle = "max-h-52 lg:max-h-64 xl:max-h-fit";
  return (
    <>
      <div className="w-full flex items-center flex-col gap-2 my-14">
        <h3 className="text-xl md:text-2xl font-semibold">LEARN ABOUT OUR</h3>
        <h1 className="text-2xl md:text-4xl font-semibold">
          STREAMLINED PROCESS
        </h1>
        <p className="text-black font-semibold">
          These are the processes for COC Application, IPO Registration, and
          IPMR Selection. See full documentation for more information.
        </p>
      </div>

      <div className="flex flex-col gap-10 md:gap-20 my-8 w-full ">
        <Card className="bg-[#ededed]" order={1}>
          <img
            className={imgStyle}
            src="/COC.png"
            alt="Streamlined 1"
          />
          <div className="flex flex-col text-left gap-6 w-full">
            <h1 className="text-lg md:text-2xl">COC APPLICATION PROCESS</h1>
            <p className="text-black text-sm md:text-base lg:text-lg">
              These are the stages of the application for applying the
              Certificate of Confirmation in The National Commission on
              Indigenous Peoples (NCIP)
            </p>
            <ul className="list-disc ml-6 text-sm md:text-base lg:text-lg">
              <li>Application and Required Documents</li>
              <li>Issuance of COCs under exceptional circumstances</li>
              <li>Evaluation</li>
              <li>Review and Verification</li>
              <li>Issuance of COC</li>
            </ul>
          </div>
        </Card>
        <Card className="bg-primary text-white" order={2}>
          <div className="flex flex-col text-left gap-6">
            <h1 className="text-2xl">IPO REGISTRATION PROCESS</h1>
            <p className="text-white text-sm md:text-base lg:text-lg">
              These are the stages of application for Indigenous People
              Organization in The National Commission on Indigenous Peoples
              (NCIP)
            </p>
            <ul className="list-disc ml-6 text-sm md:text-base lg:text-lg">
              <li>Register Application</li>
              <li>Review Application</li>
              <li>Registered IPO</li>
            </ul>
          </div>
          <img
            className={imgStyle}
            src="/IPO.jpeg"
            alt="Streamlined 2"
          />
        </Card>

        <Card className="bg-[#ededed]" order={3}>
          <img
            className={imgStyle}
            src="/IPMR.png"
            alt="Streamlined 3"
          />
          <div className="flex flex-col text-left gap-6">
            <h1 className="text-2xl">IPMR SELECTION PROCESS</h1>
            <p className="text-black text-sm md:text-base lg:text-lg">
              These are the stages of application for Indigenous People
              Mandatory Representative in The National Commission on Indigenous
              Peoples (NCIP)
            </p>
            <ul className="list-disc ml-6 text-sm md:text-base lg:text-lg">
              <li>IPMR Selection</li>
              <li>Review Application</li>
              <li>Selected IPMR</li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
}
