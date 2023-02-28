import { useQuery } from "@tanstack/react-query";
import api from "@/libs/axios/api";
import BoardResponse from "@/models/board";
import { BOARD_KEY } from "@/components/constants/key";
import API_PATH from "@/utils/path/api";

const { API_GET_BOARD } = API_PATH;

const fetcher = async (id: number) => {
  // /api/boards/:id
  const { data } = await api.get<{ boards: BoardResponse[] }>(
    API_GET_BOARD + id
  );
  return data.boards;
};

const useBoardsQuery = (id: number) => {
  return useQuery({
    queryKey: ["board", id],
    queryFn: () => fetcher(id),
    enabled: !!id,
  });

  return useQuery([BOARD_KEY], () => fetcher(id));
};

export default useBoardsQuery;
