import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeader from "@/components/page-header"; // Assuming you have this
import {
  DocumentRequest,
  Alumni,
  DocumentType,
  Payment,
  DocumentRequestStatus,
  PaymentStatus,
  DocumentRequestType as RequestTypeEnum, // Renamed to avoid conflict
} from "@/types"; // Assuming your types are in @/types
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

// Mock data fetching function - replace with your actual API call
const fetchDocumentRequestDetails = async (
  id: string
): Promise<DocumentRequest> => {
  console.log(`Fetching document request details for ID: ${id}`);
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 750));

  // In a real application, you would fetch this from your backend API
  // For example:
  // const response = await fetch(`/api/document-requests/${id}`);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch document request details");
  // }
  // return response.json();

  // Mock data based on your DocumentRequest type
  const MOCK_REQUEST_DATA: DocumentRequest = {
    id: "req_123abc",
    user_id: "user_victoria_monday",
    user: {
      id: "user_victoria_monday",
      firstname: "Victoria",
      lastname: "Monday",
      email: "victoriaima89@gmail.com",
      matric_number: "DE.2019/7445",
    },
    document_type_id: "doc_transcript_official",
    document_type: {
      id: "doc_transcript_official",
      name: "Official Academic Transcript",
      price: 5000,
      processing_fee: 500,
      internal_price: 5500,
      domestic_price: 7500,
      foreign_price: 15000,
    },
    payment_id: "pay_789xyz",
    payment: {
      id: "pay_789xyz",
      amount: 7500, // Assuming domestic
      status: "SUCCESSFUL" as PaymentStatus,
      reference: "PAYSTACK_REF_12345",
      payment_gateway: { name: "Paystack" },
      created_at: new Date().toISOString(),
    },
    recipient_name: "Admissions Office, University of Lagos",
    recipient_email: "admissions@unilag.edu.ng",
    recipient_phone: "08012345678",
    recipient_address:
      "Admissions Office, University of Lagos, Akoka, Yaba, Lagos, Nigeria",
    reference_number: "DR-20250510-001",
    type: "DOMESTIC" as RequestTypeEnum,
    status: "PROCESSING" as DocumentRequestStatus,
    notes: "Please send an electronic copy to the recipient email as well.",
    created_at: "2025-05-10T10:00:00.000Z",
    updated_at: "2025-05-10T11:30:00.000Z",
  };
  return MOCK_REQUEST_DATA;
};

const getStatusBadgeVariant = (
  status: DocumentRequestStatus | PaymentStatus
): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case "SUCCESSFUL":
    case "APPROVED":
    case "DELIVERED":
      return "default"; // Greenish in default theme
    case "PROCESSING":
    case "PENDING":
      return "secondary"; // Bluish/Yellowish
    case "FAILED":
      return "destructive";
    default:
      return "outline";
  }
};

const InfoRow = ({
  label,
  value,
  isBadge = false,
  badgeVariant = "outline",
}: {
  label: string;
  value?: string | number | null;
  isBadge?: boolean;
  badgeVariant?: any;
}) => {
  if (value === null || typeof value === "undefined" || value === "")
    return null;
  return (
    <TableRow>
      <TableCell className="font-medium text-muted-foreground w-1/3">
        {label}
      </TableCell>
      <TableCell>
        {isBadge ? (
          <Badge variant={badgeVariant}>{String(value)}</Badge>
        ) : (
          String(value)
        )}
      </TableCell>
    </TableRow>
  );
};

export default function DocumentRequestDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: request,
    isLoading,
    error,
    isError,
  } = useQuery<DocumentRequest, Error>({
    queryKey: ["documentRequest", id],
    queryFn: () => fetchDocumentRequestDetails(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 px-4">
        <PageHeader page="Document Request Details" />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent className="space-y-6 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-1/3 mb-2" />
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="flex justify-between">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError || !request) {
    return (
      <div className="container mx-auto py-10 px-4">
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back
        </Button>
        <PageHeader page="Document Request Details" />
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">
              {error?.message ||
                "Document request data could not be loaded or found."}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Requests
      </Button>

      <PageHeader page={`${request.reference_number}`} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Request Information Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Request Information</CardTitle>
            <CardDescription>Details of the document request.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <InfoRow
                  label="Reference Number"
                  value={request.reference_number}
                />
                <InfoRow
                  label="Request Type"
                  value={request.type}
                  isBadge
                  badgeVariant={
                    request.type === "FOREIGN"
                      ? "destructive"
                      : request.type === "DOMESTIC"
                      ? "secondary"
                      : "outline"
                  }
                />
                <InfoRow
                  label="Status"
                  value={request.status}
                  isBadge
                  badgeVariant={getStatusBadgeVariant(request.status)}
                />
                <InfoRow
                  label="Requested At"
                  value={new Date(request.created_at).toLocaleString()}
                />
                <InfoRow
                  label="Last Updated"
                  value={new Date(request.updated_at).toLocaleString()}
                />
                {request.notes && (
                  <InfoRow label="Notes" value={request.notes} />
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* User Details Card */}
        {request.user && (
          <Card>
            <CardHeader>
              <CardTitle>User Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <InfoRow
                    label="Full Name"
                    value={`${request.user.firstname} ${request.user.lastname}`}
                  />
                  <InfoRow label="Email" value={request.user.email} />
                  <InfoRow
                    label="Matric Number"
                    value={request.user.matric_number}
                  />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Document Type Card */}
        {request.document_type && (
          <Card>
            <CardHeader>
              <CardTitle>Document Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <InfoRow label="Name" value={request.document_type.name} />
                  <InfoRow
                    label="Base Price"
                    value={`₦${request.document_type.price?.toLocaleString()}`}
                  />
                  <InfoRow
                    label="Processing Fee"
                    value={`₦${request.document_type.processing_fee?.toLocaleString()}`}
                  />
                  {request.type === "INTERNAL" && (
                    <InfoRow
                      label="Total (Internal)"
                      value={`₦${request.document_type.internal_price?.toLocaleString()}`}
                    />
                  )}
                  {request.type === "DOMESTIC" && (
                    <InfoRow
                      label="Total (Domestic)"
                      value={`₦${request.document_type.domestic_price?.toLocaleString()}`}
                    />
                  )}
                  {request.type === "FOREIGN" && (
                    <InfoRow
                      label="Total (Foreign)"
                      value={`₦${request.document_type.foreign_price?.toLocaleString()}`}
                    />
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Payment Details Card */}
        {request.payment && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <InfoRow label="Payment ID" value={request.payment.id} />
                  <InfoRow
                    label="Amount Paid"
                    value={`₦${request.payment.amount?.toLocaleString()}`}
                  />
                  <InfoRow
                    label="Status"
                    value={request.payment.status}
                    isBadge
                    badgeVariant={getStatusBadgeVariant(
                      request.payment.status!
                    )}
                  />
                  <InfoRow
                    label="Gateway"
                    value={request.payment.payment_gateway?.name}
                  />
                  <InfoRow
                    label="Reference"
                    value={request.payment.reference}
                  />
                  <InfoRow
                    label="Paid At"
                    value={new Date(
                      request.payment.created_at!
                    ).toLocaleString()}
                  />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recipient Details Card */}
      {(request.recipient_name ||
        request.recipient_email ||
        request.recipient_phone ||
        request.recipient_address) && (
        <>
          <Separator className="my-6" />
          <Card>
            <CardHeader>
              <CardTitle>Recipient Details</CardTitle>
              <CardDescription>
                Information about where the document should be sent.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <InfoRow
                    label="Recipient Name"
                    value={request.recipient_name}
                  />
                  <InfoRow
                    label="Recipient Email"
                    value={request.recipient_email}
                  />
                  <InfoRow
                    label="Recipient Phone"
                    value={request.recipient_phone}
                  />
                  <InfoRow
                    label="Recipient Address"
                    value={request.recipient_address}
                  />
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
