import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import { useQuery } from "@tanstack/react-query";

const getFetchProject = async (userId: number) => {
  // [Request] /api/projects?user-id=userId
  const { data } = await api.get<{ projects: ProjectResponse[] }>(
    `/api/projects?user-id=${userId}`
  );
  return data.projects;
};

const useProjectsQuery = (id: number) => {
  return useQuery({ queryKey: ["project", id], queryFn: () => getFetchProject(id), enabled: !!id });
};

export default useProjectsQuery;
