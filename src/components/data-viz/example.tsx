// DESC: Example page to demonstrate how to implement data-table w/ features: search, sort, and pagination
// NOTE: Go to route: http://localhost:5173/test/data-viz to see the actual demo

import { columns } from "./columns[format]";
import DataTable from "./data-table[reuse]";
import { data } from "./data[mock]";

const Example = () => {
  return (
    <>
      <h1 className="text-2xl tracking-tight my-20 font-bold">
        Sample table component
      </h1>
      <div className="mx-32">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Example;
