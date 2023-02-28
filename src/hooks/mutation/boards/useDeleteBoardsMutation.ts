import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/boards";
import API_PATH from "@/utils/path/api";

const { API_DELETE_BOARD } = API_PATH;

const deleteFetch = async (postId: number) => {
  const res = await api.delete<BoardResponse>(`${API_DELETE_BOARD}/${postId}`);
  return res;
};

const useDeleteBoardsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteFetch, {
    onError: (error) => {
      return error;
    },
    onSuccess: (data, variables, context) => {
      console.log({ data, variables, context });
      queryClient.invalidateQueries<string>(["board"]);
    },
  });
};

export default useDeleteBoardsMutation;
