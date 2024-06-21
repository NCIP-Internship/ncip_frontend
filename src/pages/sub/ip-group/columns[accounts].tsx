import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import Actions from "./actions";

const accountSchema = z.object({
  id: z.string(),
  ipGroup: z.string().min(1, "Group name is required"),
  region: z.string(),
});

type Account = z.infer<typeof accountSchema>;

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">Account Id</div>,
  },
  {
    accessorKey: "ipGroup",
    header: () => <div className="text-center">IP Group</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("ipGroup")}</div>
    ),
  },
  {
    accessorKey: "region",
    header: () => <div className="text-center">Region</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("region")}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: () => {
      return <Actions />;
    },
  },
];
