import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import { useMutation, useQueryClient } from "@tanstack/react-query";


interface IProps {
  name: string;
  description: string;
  link: string;
}

const postFetchProject = async (newData: IProps) => {
  const res = api.post<ProjectResponse[]>("/api/projects", newData);
  console.log(res);
  return res;
};

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postFetchProject, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>(["project"]);
    },
  });
};

export default useCreateTodoMutation;
