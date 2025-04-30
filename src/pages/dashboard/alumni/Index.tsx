import { useEffect, useState } from "react"
import { DataTable } from './data-table'
import { columns, Alumni } from './columns'
import SidebarHead from "@/components/sidebar-header"

type Props = {}

const Index = (props: Props) => {
  const [data, setData] = useState<Alumni[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const payments: Alumni[] = await getData()
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
      <SidebarHead page="Alumni"/>
      
      <div className="container mx-auto py-2">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}

async function getData(): Promise<Alumni[]> {
    return [
        {
            id: "728ed52f",
            firstname: "John",
            lastname: "Doe",
            role: "ADMIN",
            email: "m@example.com",
        },
        {
            id: "902jd12k",
            firstname: "Jane",
            lastname: "Doe",
            role: "REGISTRA",
            email: "jane@example.com",
        },
    ]
}

export default Index