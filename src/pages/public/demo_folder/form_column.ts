import { ColumnDef } from "@tanstack/react-table";

interface Member {
  name: string;
  email: string;
}

const DemoFormColumn: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
  },
  {
    accessorKey: "email",
  },
];

export default DemoFormColumn;
