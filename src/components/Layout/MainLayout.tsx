import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="flex flex-col justify-center 
    align-center w-screen h-screen text-center"
    >
      {children}
    </main>
  );
};

export default MainLayout;
