import { getPayments } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function usePayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: getPayments,
  });
}
