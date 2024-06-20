import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import Actions from "./actions";

const accountSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string(),
  role: z.string(),
});

type Account = z.infer<typeof accountSchema>;

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">Account Id</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-start">Name</div>,
    cell: ({ row }) => <div className="text-start">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-start">Email</div>,
    cell: ({ row }) => (
      <div className="text-start">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: () => <div className="text-start">Role</div>,
    cell: ({ row }) => <div className="text-start">{row.getValue("role")}</div>,
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: () => {
      return <Actions />;
    },
  },
];
