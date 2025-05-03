import { getDocumentTypes } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useDocumentTypes() {
  return useQuery({
    queryKey: ["document-types"],
    queryFn: getDocumentTypes,
  });
}
