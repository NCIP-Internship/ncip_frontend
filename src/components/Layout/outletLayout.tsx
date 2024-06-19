import { FC, ReactNode } from "react";

interface OutletLayoutProps {
  children: ReactNode;
}

const OutletLayout: FC<OutletLayoutProps> = ({ children }) => {
  return <section className="h-full mt-[6rem] ml-[20rem]">{children}</section>;
};

export default OutletLayout;
