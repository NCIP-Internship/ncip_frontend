import { FC, ReactNode } from "react";

interface OutletLayoutProps {
  children: ReactNode;
}

const OutletLayout: FC<OutletLayoutProps> = ({ children }) => {
  return (
    <section className="h-full mt-[6rem] ml-[20rem] mr-3">{children}</section>
  );
};

export default OutletLayout;
