import { PROJECT_KEY } from "@/components/constants/key";
import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteFetchProject = async (projectId: number) => {
  const res = await api.delete<ProjectResponse>(`/api/projects/${projectId}`);
  return res;
};

const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteFetchProject, {
    onError: (error) => {
      return error;
    },
    onSuccess: (data, variables, context) => {
      console.log({ data, variables, context });
      queryClient.invalidateQueries<string>([PROJECT_KEY]);
    },
  });
};

export default useDeleteProjectMutation;
