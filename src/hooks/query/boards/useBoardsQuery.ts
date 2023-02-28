import api from "@/libs/axios/api";
import API_PATH from "@/utils/path/api";
import ProjectResponse from "@/models/projects";
import { useQuery } from "@tanstack/react-query";

const { API_GET_BOARD_PAGINATE } = API_PATH;
const getFetch = async (page: number) => {
  // [Request] /api/boards/2
  const { data } = await api.get<{ projects: ProjectResponse[] }>(`${API_GET_BOARD_PAGINATE}=${page}`);
  return data.projects;
};

const useBoardsQuery = (page: number) => {
  return useQuery({ queryKey: ["board", page], queryFn: () => getFetch(page), enabled: !!page });
};

export default useBoardsQuery;
