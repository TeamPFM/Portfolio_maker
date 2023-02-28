import React from "react";
import BoardMain from "@/components/board/BoardMain";
import BoardDetail from "@/components/board/BoardDetail";
import { useParams } from "react-router-dom";

const BoardPage = () => {
  const { id } = useParams();

  return <div>{id ? <BoardDetail boardId={id} /> : <BoardMain />}</div>;
};

export default BoardPage;
