import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alumni } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router";

export const columns: ColumnDef<Alumni>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "middlename",
    header: "Middle Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "matric_number",
    header: "Matric Number",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return <Actions user={row.original} />;
    },
  },
];

function Actions({ user }: { user: Alumni }) {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="outline" onClick={() => navigate(user.id)}>
        View
      </Button>
    </div>
  );
}
