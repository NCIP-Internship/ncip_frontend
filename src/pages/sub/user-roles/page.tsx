import { DataTable } from "@/components/ui/data-table";
import { FC } from "react";
import { columns } from "./columns[accounts]";
import { data } from "./data[mock]";

interface PageProps { }

const Page: FC<PageProps> = () => {
  return (
    <section className="m-20">
      <h1 className="font-bold text-start text-3xl">User Privileges</h1>
      <DataTable columns={columns} data={data} add="role" />
    </section>
  );
};

export default Page;
