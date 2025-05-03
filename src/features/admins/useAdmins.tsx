import { getAdmins } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useAdmins() {
  return useQuery({
    queryKey: ["admins"],
    queryFn: getAdmins,
  });
}
