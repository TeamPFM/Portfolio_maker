import { USER_KEY } from "@/components/constants/key";
import api from "@/libs/axios/api";
import UsersResponse from "@/models/users";
import API_PATH from "@/utils/path/api";
import { useQuery } from "@tanstack/react-query";

const { API_GET_USER_INFO } = API_PATH;

const fetcher = async () => {
  const { data } = await api.get<UsersResponse>(API_GET_USER_INFO);
  return data;
};

const fetcherUserInfo = async (id: number) => {
  const { data } = await api.get<UsersResponse>(API_GET_USER_INFO);
  return data;
};

const useUsersQuery = () => {
  return useQuery({ queryKey: [USER_KEY], queryFn: () => fetcher() });
};

export const useUsersInfoQuery = (id: number) => {
  return useQuery({ queryKey: [USER_KEY], queryFn: () => fetcherUserInfo(id) });
};

export default useUsersQuery;
