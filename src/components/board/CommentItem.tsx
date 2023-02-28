import React, { useState } from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import API_PATH from "@/utils/path/api";
import api from "@/libs/axios/api";
import { StatusResponse } from "@/models/board/detail";
import { FaUserCircle } from "react-icons/fa";

interface CommentProps {
  id: number;
  idx: number;
  content: string;
  userId: string | number;
  commentUserInfo: any;
  boardId: string | number;
}

const CommentItem = (props: CommentProps) => {
  const [commentContent, setCommentContent] = useState<string>(props.content);
  const [isCommentEdit, setIsCommentEdit] = useState<boolean>(false);

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

  const dateParse = (date: string) => {
    return new Date(date).toLocaleString();
  };

  return (
    <li key={props.id} className={`${props.idx && "border-t"}`}>
      <div className="flex justify-between p-2">
        <div className="flex flex-col w-full">
          <figure className="flex mb-4">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center bg-gray-300 shadow-lg p-[1px] mr-4">
              {props.commentUserInfo.imagePath ? (
                <img
                  src={`http://pfmback-env-1.eba-cmbywf2u.ap-northeast-2.elasticbeanstalk.com/img/${props.commentUserInfo.imagePath}`}
                  alt={props.commentUserInfo.imageName}
                />
              ) : (
                <FaUserCircle className="text-[120px] text-white" />
              )}
            </div>

            <figcaption className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-main">
                {props.commentUserInfo.name}
              </h4>
              <small className="text-sm text-gray-300">
                {dateParse(props.commentUserInfo.updatedAt)}
              </small>
            </figcaption>
          </figure>

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
        </div>

        {props.userId === props.commentUserInfo.id && (
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
