import { columns } from "@/features/payments/column";
import { DataTable } from "@/components/data-table";
import { usePayments } from "@/features/payments/usePayments";
import PageHeader from "@/components/page-header";
import { useParams } from "react-router";

export default function Payments() {
  const { data } = usePayments();
  const params = useParams();
  return (
    <main>
      <PageHeader page="Payments" />
      <div className="container mx-auto">
        <DataTable
          columns={columns}
          data={
            data?.filter(
              (payment) =>
                payment.status?.toLowerCase() === params.status?.toLowerCase()
            ) || []
          }
        />
      </div>
    </main>
  );
}
