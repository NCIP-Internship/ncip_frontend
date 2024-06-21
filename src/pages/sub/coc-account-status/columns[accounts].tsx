import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import Actions from "./actions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const accountSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  region: z.string(),
  type: z.string(),
  status: z.string(),
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
    accessorKey: "region",
    header: () => <div className="text-center">Region</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("region")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: () => <div className="text-center">Type</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const color =
        status === "Approved"
          ? "bg-green-500"
          : status === "Pending"
          ? "bg-orange-500"
          : "bg-red-500";
      return (
        <Badge className={cn("text-center bg-gre", color)}>{status}</Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: () => {
      return <Actions />;
    },
  },
];
