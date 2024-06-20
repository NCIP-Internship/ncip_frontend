import OutletLayout from "@/components/Layout/outletLayout";
import { DataTable } from "@/components/ui/data-table";
import { FC } from "react";
import { columns } from "./columns[accounts]";
import { data } from "./data[mock]";

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <OutletLayout>
      <div className=" h-full">
        <h3 className="font-bold text-start text-2xl">Accounts</h3>
        <DataTable columns={columns} data={data} add="user" />
      </div>
    </OutletLayout>
  );
};

export default Page;
