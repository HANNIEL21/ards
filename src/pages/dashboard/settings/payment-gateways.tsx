import { DataTable } from "@/components/data-table";
import PageHeader from "@/components/page-header";
import { columns } from "@/features/payment-gateway/columns";
import { usePaymentGateways } from "@/features/payment-gateway/usePaymentGateways";

export default function PaymentGateways() {
  const { data: paymentGateways } = usePaymentGateways();
  return (
    <main>
      <PageHeader page="Payment Gateways" />
      <div className="mx-auto">
        <DataTable columns={columns} data={paymentGateways || []} />
      </div>
    </main>
  );
}
