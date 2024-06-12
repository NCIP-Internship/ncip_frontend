import { columns } from "@/components/data-viz/columns[format]";
import { ColumnDef } from "@tanstack/react-table";

const DemoColumn: ColumnDef<COC>[] = [
  {
    accessorKey: "id",
  },
  {
    accessorKey: "first_name",
  },
  {
    accessorKey: "id",
  },
  {
    accessorKey: "first_name",
  },
  {
    accessorKey: "last_name",
  },
  {
    accessorKey: "middle_name",
  },
  {
    accessorKey: "birthday",
  },
  {
    accessorKey: "ethnicity",
  },
  {
    accessorKey: "age",
  },
  {
    accessorKey: "gender",
  },
  {
    accessorKey: "father",
  },
  {
    accessorKey: "father_place_of_origin",
  },
  {
    accessorKey: "father_ethnicity",
  },
  {
    accessorKey: "mother",
  },
  {
    accessorKey: "mother_place_of_origin",
  },
  {
    accessorKey: "mother_ethnicity",
  },
  {
    accessorKey: "purpose",
  },
  {
    accessorKey: "issuing_office",
  },
  {
    accessorKey: "barangay",
  },
  {
    accessorKey: "municipality",
  },
];

export default DemoColumn;
