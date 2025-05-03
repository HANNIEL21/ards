import { Checkbox } from "@/components/ui/checkbox";
import { Payment } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
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
    accessorKey: "reference",
    header: "Reference",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
];
