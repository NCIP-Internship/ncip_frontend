// Example page to demonstrate how to implement data-table w/ cva
// Go to route: http://localhost:5173/test/data-viz to see the actual demo

import { columns } from "./columns";
import DataTable from "./data-table";
import { data } from "./mock-data";

const Example = () => {
  return (
    <>
      <h1 className="text-2xl tracking-tight my-20 font-bold">
        Testing table component
      </h1>
      <div className="mx-32">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Example;
