import { useQuery } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/board";
import { BOARDPAGE_KEY, BOARD_KEY } from "@/components/constants/key";
import API_PATH from "@/utils/path/api";

const { API_GET_BOARD_PAGINATE } = API_PATH;

const fetcher = async (id: number) => {
  // /api/boards/:id
  const { data: boardpage } = await api.get<{ id: number }>(
    API_GET_BOARD_PAGINATE + id
  );
  return boardpage;
};

const usePageNationQuery = (boardpage: number) => {
  return useQuery({
    queryKey: ["boardpage", boardpage],
    queryFn: () => fetcher(boardpage),
    enabled: !!boardpage,
  });

  return useQuery([BOARDPAGE_KEY], () => fetcher(boardpage));
};

export default usePageNationQuery;
