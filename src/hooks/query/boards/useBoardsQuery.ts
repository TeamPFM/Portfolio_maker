import { useQuery } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/board";
import { BOARD_KEY } from "@/components/constants/key";
import API_PATH from "@/utils/path/api";

const { API_GET_BOARD } = API_PATH;
// "/api/boards"
const fetcher = async (page: number) => {
  const { data } = await api.get<{ boards: BoardResponse[] }>(
    API_GET_BOARD + page
  );
  return data.boards;
};

const useBoardsQuery = (page: number) => {
  return useQuery({
    queryKey: [BOARD_KEY, page],
    queryFn: () => fetcher(page),
    enabled: !!page,
  });
};

export default useBoardsQuery;
