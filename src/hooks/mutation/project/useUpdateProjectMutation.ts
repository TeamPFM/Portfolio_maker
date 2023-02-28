import { PROJECT_KEY } from "@/components/constants/key";
import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import API_PATH from "@/utils/path/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const { API_UPDATE_PROJECT } = API_PATH;

const updateFetchProject = async ({
  id: projectId,
  ...data
}: ProjectResponse) => {
  const res = await api.put<ProjectResponse>(API_UPDATE_PROJECT + projectId);
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
      queryClient.invalidateQueries<string>([PROJECT_KEY]);
    },
  });
};

export default useUpdateProjectMutation;
