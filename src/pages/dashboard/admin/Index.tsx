import { DataTable } from "./data-table";
import { columns } from "./columns";
import SidebarHead from "@/components/sidebar-header";
import { useAdmins } from "@/features/admins/useAdmins";

function Index() {
  const { data: admins } = useAdmins();

  return (
    <main>
      <SidebarHead page="Admins" />

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={admins || []} />
      </div>
    </main>
  );
}

export default Index;
