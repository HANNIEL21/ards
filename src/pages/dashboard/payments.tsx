import SidebarHead from "@/components/sidebar-header";
import { columns } from "@/features/payments/column";
import { DataTable } from "@/components/data-table";
import { usePayments } from "@/features/payments/usePayments";

export default function Payments() {
  const { data } = usePayments();
  return (
    <main>
      <SidebarHead page="Payments" />

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data || []} />
      </div>
    </main>
  );
}
