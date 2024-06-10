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
        "flex flex-col  md:flex-row gap-10 p-10 w-[80%] m-auto relative justify-evenly",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default function Streamlined() {
  const imgStyle = "max-h-84 lg:max-h-64 xl:max-h-fit max-w-96 lg:max-w-84";
  return (
    <>
      <div className="w-full flex flex-col gap-2 my-14 font-primary">
        <h3 className="text-xl md:text-2xl font-semibold">LEARN ABOUT OUR</h3>
        <h1 className="text-2xl md:text-4xl font-semibold">
          STREAMLINED PROCESS
        </h1>
        <p className="text-black font-semibold">
          These are the processes for COC Application, IPO Registration, and
          IPMR Selection. See full documentation for more information.
        </p>
      </div>

      <div className="flex flex-col gap-10 md:gap-20 my-8 w-full font-primary">
        <Card order={1}>
          <img
            className={imgStyle}
            src="Streamlined 1.png"
            alt="Streamlined 1"
          />
          <div className="flex flex-col text-left gap-6 justify-center">
            <h1 className="text-lg md:text-2xl font-bold">Certificate of Confirmation</h1>
            <ul className="list-disc ml-6 text-sm md:text-base lg:text-lg">
              <li>Application and Required Documents</li>
              <li>Issuance of COCs under exceptional circumstances</li>
              <li>Evaluation</li>
              <li>Review and Verification</li>
              <li>Issuance of COC</li>
            </ul>
          </div>
        </Card>
        <Card order={2}>
          <div className="flex flex-col text-left gap-6 justify-center">
            <h1 className="text-2xl font-bold">IPO REGISTRATION PROCESS</h1>
            <ul className="list-disc ml-6 text-sm md:text-base lg:text-lg">
              <li>Registration and Required Documents</li>
              <li>Filing Application</li>
              <li>Verification and Validation</li>
              <li>Issuance and Release</li>
            </ul>
          </div>
          <img
            className={imgStyle}
            src="Streamlined 2.png"
            alt="Streamlined 2"
          />
        </Card>

        <Card order={3}>
          <img
            className={imgStyle}
            src="Streamlined 3.png"
            alt="Streamlined 3"
          />
          <div className="flex flex-col text-left gap-6 justify-center">
            <h1 className="text-2xl font-bold">IPMR SELECTION PROCESS</h1>
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
