import { BOARD_KEY } from "@/components/constants/key";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import API_PATH from "@/utils/path/api";
import BoardResponse from "@/models/boards";

interface IProps {
  title: string;
  content: string;
}

const { API_CREATE_BOARD } = API_PATH;

const fetcher = async (data: IProps) => {
  const res = api.post<BoardResponse>(API_CREATE_BOARD, data);
  console.log(res);
  return res;
};

const useCreateBoardsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(fetcher, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOARD_KEY]);
    },
  });
};

export default useCreateBoardsMutation;
