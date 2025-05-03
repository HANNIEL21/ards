import { getUsers } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
