import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Archive, Edit, MoreHorizontal } from "lucide-react";
import { z } from "zod";

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
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="flex gap-2 items-center">
              <Edit size={15} />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-2 items-center">
              <Archive size={15} />
              Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
