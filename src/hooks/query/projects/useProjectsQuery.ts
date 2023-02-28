import { PROJECT_KEY } from "@/components/constants/key";
import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import API_PATH from "@/utils/path/api";
import { useQuery } from "@tanstack/react-query";

const { API_GET_PROJECT } = API_PATH;

const getFetchProject = async (userId: number) => {
  // [Request] /api/projects?user-id=userId
  const { data } = await api.get<{ projects: ProjectResponse[] }>(
    API_GET_PROJECT + userId
  );
  return data.projects;
};

const useProjectsQuery = (id: number) => {
  return useQuery({
    queryKey: [PROJECT_KEY, id],
    queryFn: () => getFetchProject(id),
    enabled: !!id,
  });
};

export default useProjectsQuery;
