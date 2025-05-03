import { DataTable } from "@/components/data-table";
import SidebarHead from "@/components/sidebar-header";
import { columns } from "@/features/payment-gateway/columns";
import { usePaymentGateways } from "@/features/payment-gateway/usePaymentGateways";

export default function PaymentGateways() {
  const { data: paymentGateways } = usePaymentGateways();
  return (
    <main>
      <SidebarHead page="Payment Gateways" />

      <div className="mx-auto py-2">
        <DataTable columns={columns} data={paymentGateways || []} />
      </div>
    </main>
  );
}
