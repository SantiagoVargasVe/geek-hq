import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { User } from "database";

const useGetAllUsers: () => UseQueryResult<User[], Error> = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      return fetch("/api/users").then((res) => res.json());
    },
  });
};

export default useGetAllUsers;
