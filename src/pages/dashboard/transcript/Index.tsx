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
      <SidebarHead page="Transcript" />
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
      year: "2002",
      matric_no: "De.2002/0001",
      degree: "Bsc. Computer Science",
      status: "pending",
      uploaded: "",
    },
    {
      id: "728ed52f",
      student_name: "Jane Doe",
      year: "2004",
      matric_no: "De.2004/0001",
      degree: "Bsc. Computer Science",
      status: "pending",
      uploaded: "",
    },
  ]
}

export default Index