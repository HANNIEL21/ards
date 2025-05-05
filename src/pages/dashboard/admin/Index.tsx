import { columns } from "./columns";
import { useAdmins } from "@/features/admins/useAdmins";
import PageHeader from "@/components/page-header";
import { DataTable } from "@/components/data-table";

function Index() {
  const { data: admins } = useAdmins();

  return (
    <main>
      <PageHeader page="Admins" />

      <div className="container mx-auto">
        <DataTable columns={columns} data={admins || []} />
      </div>
    </main>
  );
}

export default Index;
