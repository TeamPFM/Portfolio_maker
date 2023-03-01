import React from "react";
import BoardMain from "@/components/board/BoardMain";
import BoardDetail from "@/components/board/BoardDetail";
import { useParams } from "react-router-dom";

const BoardPage = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-start pt-6">
      {id ? <BoardDetail boardId={id} /> : <BoardMain />}
    </div>
  );
};

export default BoardPage;
