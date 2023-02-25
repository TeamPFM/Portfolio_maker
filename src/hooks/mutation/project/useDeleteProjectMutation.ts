import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteFetchProjectData = (projectId: number) => {
  const res = api.delete<ProjectResponse>(`/api/projects/${projectId}`);
  return res;
};

const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteFetchProjectData, {
    onError: (error) => {
      return error;
    },
    onSuccess: (data, variables, context) => {
      console.log({data, variables, context})
      queryClient.invalidateQueries<string>(["project"]);
    },
  });
};

export default useDeleteProjectMutation;
