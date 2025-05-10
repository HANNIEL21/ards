import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DocumentRequest } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router";

export const columns: ColumnDef<DocumentRequest>[] = [
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
  { accessorKey: "id", header: "Id" },
  {
    accessorKey: "user.matric_number",
    header: "Matric Number",
  },
  {
    accessorKey: "document.name",
    header: "Document Type",
  },
  { accessorKey: "payment.status", header: "Payment Status" },
  {
    accessorKey: "type",
    header: "Type",
  },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return <Actions request={row.original} />;
    },
  },
];

function Actions({ request }: { request: DocumentRequest }) {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        size="sm"
        variant="outline"
        onClick={() => navigate(`${request.id}/details`)}
      >
        View
      </Button>
    </div>
  );
}
