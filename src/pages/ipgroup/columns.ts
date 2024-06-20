import { ColumnDef } from "@tanstack/react-table";
import { IpGroup } from "./ipgroup-form";

const IpGroupColumns: ColumnDef<IpGroup>[] = [
  {
    accessorKey: "ip_group",
    header: "IP Group",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: (info) => new Date(info.getValue() as string).toLocaleString(),
  },
];

export default IpGroupColumns;
