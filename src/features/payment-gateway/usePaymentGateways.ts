import { getPaymentGateways } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function usePaymentGateways() {
  return useQuery({
    queryKey: ["payment-gateways"],
    queryFn: getPaymentGateways,
  });
}
