import React, { useState } from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import API_PATH from "@/utils/path/api";
import api from "@/libs/axios/api";
import { StatusResponse } from "@/models/board/detail";
import { useNavigate } from "react-router-dom";
import Path from "@/utils/path/routes";

interface CommentProps {
  id: number;
  idx: number;
  content: string;
  userId: string | number;
  userName: string;
  commentUserId: number;
  boardId: string | number;
}

const CommentItem = (props: CommentProps) => {
  const navigate = useNavigate();
  const [commentContent, setCommentContent] = useState<string>(props.content);
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);

  const { BOARD } = Path;
  const { API_COMMENT_UPDATE, API_COMMENT_DELETE } = API_PATH;

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") handleUpdateComment();
  };

  const handleUpdateComment = async () => {
    setIsCommentEdit(!isCommentEdit);

    isCommentEdit &&
      (await api
        .patch<StatusResponse>(`${API_COMMENT_UPDATE}/${props.id}`, {
          content: commentContent,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error)));
  };

  const handleDeleteComment = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (confirm("정말로 삭제 하시겠습니까?")) {
      await api
        .delete<StatusResponse>(`${API_COMMENT_DELETE}/${props.id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <li key={props.id} className={`${props.idx && "border-t"}`}>
      <div className="flex justify-between items-center">
        <span className="px-2 py-1 text-lg text-semibold">
          {props.userName}
        </span>
      </div>

      <div className="flex justify-between p-2">
        {isCommentEdit ? (
          <input
            className="border w-full rounded-sm focus:outline-none focus:border-main p-2"
            type="text"
            defaultValue={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            onKeyDown={handleOnKeyDown}
          />
        ) : (
          <p className="pr-4 p-2">{commentContent}</p>
        )}

        {props.userId === props.commentUserId && (
          <div className="flex items-center">
            <button
              className="flex justify-center items-center text-2xl text-main"
              onClick={handleUpdateComment}
            >
              <RiEditBoxLine />
            </button>
            <button
              className="flex justify-center items-center text-2xl text-red-400 ml-4"
              onClick={handleDeleteComment}
            >
              <RiDeleteBin5Line />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default CommentItem;
