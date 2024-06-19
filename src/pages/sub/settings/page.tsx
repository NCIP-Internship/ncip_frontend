import OutletLayout from "@/components/Layout/outletLayout";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <OutletLayout>
      <div className="bg-rose-50 h-full">Settings Page</div>
    </OutletLayout>
  );
};

export default Page;
