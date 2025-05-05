import { columns } from "@/features/document-requests/column";
import { DataTable } from "@/components/data-table";
import { useDocumentRequests } from "@/features/document-requests/useDocumentRequest";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";

export default function DocumentRequests() {
  const { data } = useDocumentRequests();

  const params = useParams();

  return (
    <main>
      <PageHeader page="Document Requests">
        <Button> Request Document</Button>
      </PageHeader>

      <div className="container mx-auto">
        <DataTable
          columns={columns}
          data={
            data?.filter(
              (request) =>
                request.status?.toLowerCase() === params.status?.toLowerCase()
            ) ?? []
          }
        />
      </div>
    </main>
  );
}
