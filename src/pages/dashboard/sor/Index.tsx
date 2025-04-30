import { useEffect, useState } from "react"
import { DataTable } from './data-table'
import { columns, STATEMENT } from './columns'
import SidebarHead from "@/components/sidebar-header"

type Props = {}

const Index = (props: Props) => {
  const [data, setData] = useState<STATEMENT[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const payments: STATEMENT[] = await getData()
      setData(payments)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="p-10 text-center text-muted-foreground">Loading...</div>
  }

  return (
    <main>
      <SidebarHead page="Statement of result" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
      </div>
      <div className="container mx-auto max-w-5xl py-2">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}

async function getData(): Promise<STATEMENT[]> {
  return [
    {
      id: "728ed52f",
      student_name: "John Doe",
      matric_no: "De.2002/0001",
      degree: "Bsc. Computer Science",
      department: "Computer Science",
      faculty: "Engineering",
      session: "2020/2021",
      class_of_degree: "First Class",
      graduation_date: "2021-05-15", // ISO string or date
      status: "pending",
      uploaded: "",
    },
    {
      id: "728ed52g",
      student_name: "Jane Doe",
      matric_no: "De.2004/0001",
      degree: "Bsc. Computer Science",
      department: "Computer Science",
      faculty: "Engineering",
      session: "2020/2021",
      class_of_degree: "Upper Second Class",
      graduation_date: "2021-05-15", // ISO string or date
      status: "pending",
      uploaded: "",
    },
  ]
}

export default Index