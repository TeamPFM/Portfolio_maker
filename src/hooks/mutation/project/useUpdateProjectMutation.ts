import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateFetchProject = async ({ id: projectId, ...data }: ProjectResponse) => {
  const res = await api.put<ProjectResponse>(`/api/projects/${projectId}`, data);
  return res;
};

const useUpdateProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateFetchProject, {
    onError: (error) => {
      return error;
    },
    onSuccess: (data, variables, context) => {
      console.log({ data, variables, context });
      queryClient.invalidateQueries<string>(["project"]);
    },
  });
};

export default useUpdateProjectMutation;
