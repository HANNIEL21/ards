import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { useUsers } from "@/features/users/useUsers";
import PageHeader from "@/components/page-header";

const Index = () => {
  const { data: users } = useUsers();

  return (
    <main>
      <PageHeader page="Alumni" />
      <div className="container mx-auto">
        <DataTable columns={columns} data={users || []} />
      </div>
    </main>
  );
};

export default Index;
