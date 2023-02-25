import api from "@/libs/axios/api";
import UsersResponse from "@/models/users";
import { useQuery } from "@tanstack/react-query";

const getFetchUsers = async () => {
  const { data } = await api.get<UsersResponse>("/api/users/info");
  return data;
};

const useUsersQuery = () => {
  return useQuery({ queryKey: ["user"], queryFn: () => getFetchUsers() });
};

export default useUsersQuery;
