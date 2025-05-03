import { getDocumentRequests } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useDocumentRequests() {
  return useQuery({
    queryKey: ["document-requests"],
    queryFn: getDocumentRequests,
  });
}
