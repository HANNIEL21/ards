import { DataTable } from "@/components/data-table";
import SidebarHead from "@/components/sidebar-header";
import { useDocumentTypes } from "@/features/document-types/useDocumentTypes";
import { columns } from "@/features/document-types/columns";

export default function DocumentTypes() {
  const { data: documentTypes } = useDocumentTypes();
  return (
    <main>
      <SidebarHead page="Document Types" />

      <div className="container mx-auto py-2">
        <DataTable columns={columns} data={documentTypes || []} />
      </div>
    </main>
  );
}
