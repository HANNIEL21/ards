import SidebarHead from "@/components/sidebar-header";
import { columns } from "@/features/document-requests/column";
import { DataTable } from "@/components/data-table";
import { useDocumentRequests } from "@/features/document-requests/useDocumentRequest";

export default function DocumentRequests() {
  const { data } = useDocumentRequests();
  return (
    <main>
      <SidebarHead page="Document Requests" />

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data || []} />
      </div>
    </main>
  );
}
