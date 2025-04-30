import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"
import { cn } from "@/lib/utils" // if you're using className utility
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export type STATEMENT = {
    id: string
    student_name: string
    matric_no: string
    degree: string
    year: string
    status: string
    uploaded: string
}

export const columns: ColumnDef<STATEMENT>[] = [
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
        accessorKey: "student_name",
        header: "Student Name",
    },
    {
        accessorKey: "matric_no",
        header: "Matric No",
    },
    {
        accessorKey: "degree",
        header: "Degree",
    },
    {
        accessorKey: "year",
        header: "Year",
    },
    {
        accessorKey: "uploaded",
        header: "Uploaded",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string

            const statusColor = {
                pending: "bg-yellow-100 text-yellow-800",
                processing: "bg-blue-100 text-blue-800",
                success: "bg-green-100 text-green-800",
                failed: "bg-red-100 text-red-800",
            }

            return (
                <Badge
                    className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                        statusColor[status as keyof typeof statusColor] || "bg-gray-100 text-gray-800"
                    )}
                >
                    {status}
                </Badge>
            )
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const data = row.original
            const navigate = useNavigate()
            return (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/dashboard/transcripts/${data.id}`)}
                >
                    View
                </Button>
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
]
