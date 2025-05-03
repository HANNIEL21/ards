import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns, CERTIFICATE } from "./columns";
import SidebarHead from "@/components/sidebar-header";

const Index = () => {
  const [data, setData] = useState<CERTIFICATE[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const payments: CERTIFICATE[] = await getData();
      setData(payments);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-muted-foreground">Loading...</div>
    );
  }

  return (
    <main className="w-full overflow-x-hidden">
      <SidebarHead page="Certificate" />
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
  );
};

async function getData(): Promise<CERTIFICATE[]> {
  return [
    {
      id: "a10001",
      student_name: "Emmanuel Nwachukwu",
      matric_no: "EE.2014/0010",
      degree: "BSc. Electrical Engineering",
      department: "Electrical Engineering",
      faculty: "Science",
      graduation_date: "2018-06-15",
      certificate_number: "CERT-EE-2018-0001",
      issued_date: "2023-05-10",
      status: "collected",
      uploaded: "2023-05-10",
    },
    {
      id: "a10002",
      student_name: "Fatima Suleiman",
      matric_no: "ME.2017/0345",
      degree: "BSc. Mechanical Engineering",
      department: "Mechanical Engineering",
      faculty: "Engineering",
      graduation_date: "2021-07-20",
      certificate_number: "CERT-ME-2021-0034",
      issued_date: "2024-02-20",
      status: "printed",
      uploaded: "2024-02-15",
    },
    {
      id: "a10003",
      student_name: "Grace Okoro",
      matric_no: "BT.2019/0456",
      degree: "BTech. Biotechnology",
      department: "Biotechnology",
      faculty: "Health Sciences",
      graduation_date: "2023-10-05",
      certificate_number: "",
      issued_date: "",
      status: "not issued",
      uploaded: "2024-03-10",
    },
    {
      id: "a10004",
      student_name: "Henry Bassey",
      matric_no: "CS.2021/0780",
      degree: "BSc. Computer Science",
      department: "Computer Science",
      faculty: "Science",
      graduation_date: "2024-05-22",
      certificate_number: "",
      issued_date: "",
      status: "not issued",
      uploaded: "",
    },
  ];
}

export default Index;
