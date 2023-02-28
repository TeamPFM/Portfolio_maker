import { useQuery } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/board";
import { BOARDS_KEY } from "@/components/constants/key";
import API_PATH from "@/utils/path/api";

const { API_GET_BOARD_PAGINATE } = API_PATH;
// "/api/boards"
const fetcher = async (page: number) => {
  const { data } = await api.get<BoardResponse[]>(
    API_GET_BOARD_PAGINATE + page
  );
  return data;
};

const useBoardsQuery = (page: number) => {
  return useQuery({
    queryKey: [BOARDS_KEY, page],
    queryFn: () => fetcher(page),
    enabled: !!page,
  });
};

export default useBoardsQuery;
