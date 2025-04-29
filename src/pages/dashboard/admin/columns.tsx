import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Admin = {
    id: string
    firstname: string
    lastname: string
    role: "SUPER ADMIN" | "ADMIN" | "REGISTRA" 
    email: string
}

export const columns: ColumnDef<Admin>[] = [
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
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    
]
