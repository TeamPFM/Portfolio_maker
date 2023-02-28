import { BOARD_KEY } from "@/components/constants/key";
import { useQuery } from "@tanstack/react-query";
import API_PATH from "@/utils/path/api";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/boards";

const { API_GET_BOARD } = API_PATH;

const getFetchBoard = async (postId: number) => {
  // [Request] /api/boards/8
  const { data } = await api.get<BoardResponse>(`${API_GET_BOARD}/${postId}`);
  return data;
};

const useBoardFindOneQuery = (id: number) => {
  return useQuery({
    queryKey: [BOARD_KEY, id],
    queryFn: () => getFetchBoard(id),
    enabled: !!id,
  });
};

export default useBoardFindOneQuery;
