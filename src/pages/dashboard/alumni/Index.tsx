import { DataTable } from "./data-table";
import { columns } from "./columns";
import SidebarHead from "@/components/sidebar-header";
import { useUsers } from "@/features/users/useUsers";

const Index = () => {
  const { data: users } = useUsers();

  return (
    <main>
      <SidebarHead page="Alumni" />

      <div className="container mx-auto py-2">
        <DataTable columns={columns} data={users || []} />
      </div>
    </main>
  );
};

export default Index;
