import { BOARD_KEY } from '@/components/constants/key';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/boards";
import API_PATH from "@/utils/path/api";
import Path from "@/utils/path/routes";

const { BOARD } = Path;
const { API_UPDATE_BOARD } = API_PATH;
const updateFetch = async ({ postId, ...data }: BoardResponse) => {
  const res = await api.patch<BoardResponse>(
    `${API_UPDATE_BOARD}/${postId}`,
    data
  );
  return res;
};

const useUpdateBoardsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateFetch, {
    onError: (error) => {
      return error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries<string>([BOARD_KEY]);
      window.location.replace(BOARD);
    },
  });
};

export default useUpdateBoardsMutation;
