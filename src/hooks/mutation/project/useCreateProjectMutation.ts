import { PROJECT_KEY } from "@/components/constants/key";
import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import API_PATH from "@/utils/path/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  name: string;
  description: string;
  link: string;
}

const postFetchProject = async (newData: IProps) => {
  const { API_CREATE_PROJECT } = API_PATH;

  const res = api.post<ProjectResponse[]>(API_CREATE_PROJECT, newData);
  return res;
};

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postFetchProject, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([PROJECT_KEY]);
    },
  });
};

export default useCreateTodoMutation;
