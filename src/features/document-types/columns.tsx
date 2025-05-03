import { Checkbox } from "@/components/ui/checkbox";
import { DocumentType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<DocumentType>[] = [
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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "internal_price", header: "Internal Price" },
  { accessorKey: "domestic_price", header: "Domestic Price" },
  { accessorKey: "foreign_price", header: "Foreign Price" },
  { accessorKey: "processing_fee", header: "Processing Fee" },
];
