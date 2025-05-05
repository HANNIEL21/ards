import { DataTable } from "@/components/data-table";
import { useDocumentTypes } from "@/features/document-types/useDocumentTypes";
import { columns } from "@/features/document-types/columns";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function DocumentTypes() {
  const { data: documentTypes } = useDocumentTypes();
  return (
    <main>
      <PageHeader page="Document Types">
        <Button>
          <PlusIcon /> Add Document Type
        </Button>
      </PageHeader>

      <div className="container mx-auto">
        <DataTable columns={columns} data={documentTypes || []} />
      </div>
    </main>
  );
}
