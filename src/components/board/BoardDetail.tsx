import React, { useEffect, useState, useRef } from "react";
import { SubButton } from "@/styles/ui-components/styled-button";
import Path from "@/utils/path/routes";
import API_PATH from "@/utils/path/api";
import api from "@/libs/axios/api";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  BoardInfoGetResponse,
  CommentProps,
  StatusResponse,
  CommentCreateRequest,
} from "@/models/board/detail";
import CommentItem from "./CommentItem";
import { UserInfoGetResponse } from "@/models/myinfo";

const BoardDetail = (props: { boardId: string }) => {
  const navigate = useNavigate();
  const { BOARD } = Path;
  const { API_GET_USER_INFO, API_GET_BOARD, API_COMMENT_CREATE } = API_PATH;

  const commentCreateRef = useRef<HTMLInputElement | null>(null);
  const [userId, setUserId] = useState<string | number>("");
  const [boardInfo, setBoardInfo] = useState<BoardInfoGetResponse>({
    id: 0,
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
    comments: [
      {
        id: 0,
        users: {},
        content: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: "",
      },
    ],
  });

  useEffect(() => {
    getBoardInfo();
    getUserInfo();
  }, []);

  const getBoardInfo = async () => {
    await api
      .get<BoardInfoGetResponse>(`${API_GET_BOARD}/${props.boardId}`)
      .then((res) => {
        setBoardInfo(res.data);
        console.log(boardInfo);
      })
      .catch((error) => console.log(error));
  };

  const getUserInfo = async () => {
    await api
      .get<UserInfoGetResponse>(API_GET_USER_INFO)
      .then((res) => setUserId(res.data.id))
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-5 w-full max-w-[1000px] m-auto">
      <SubButton
        className="flex items-center font-semibold text-white border-none mb-5"
        onClick={() => navigate(BOARD, { replace: true })}
      >
        <HiOutlineArrowLeft className="text-3xl pr-3" /> 목록으로
      </SubButton>

      <div className="h-[500px] w-full bg-sub text-center rounded">
        <h2>{boardInfo.title}</h2>

        <p>{boardInfo.content}</p>
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="flex justify-between">
          <input
            type="text"
            className="flex-auto border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2 rounded-l-md"
            ref={commentCreateRef}
          />
          <SubButton
            className="basis-[100px] shrink-0 border-none rounded-l-none"
            onClick={() => {
              const reqData: CommentCreateRequest = {
                boardId: props.boardId,
                content: commentCreateRef.current?.value ?? "",
              };

              api
                .post<StatusResponse>(API_COMMENT_CREATE, reqData)
                .then((res) => {
                  if (!commentCreateRef.current) {
                    return;
                  }

                  getBoardInfo();
                  commentCreateRef.current.value = "";
                })
                .catch((error) => console.log(error));
            }}
          >
            댓글 쓰기
          </SubButton>
        </div>

        <ul className="flex flex-col w-full my-5 bg-white rounded">
          {boardInfo.comments.map((comment, idx) => (
            <CommentItem
              key={comment.id}
              id={comment.id}
              idx={idx}
              boardId={props.boardId}
              content={comment.content}
              userId={userId}
              commentUserId={comment.users.id}
            />

            // <li
            //   key={comment.id}
            //   className={`flex justify-between p-2 ${idx && "border-t"}`}
            // >
            //   {isCommentEdit ? (
            //     <input
            //       className="border w-full rounded-sm focus:outline-none focus:border-main p-2"
            //       type="text"
            //       defaultValue={comment.content}
            //     />
            //   ) : (
            //     <p className="pr-4 p-2">{comment.content}</p>
            //   )}

            //   <div className="flex items-center">
            //     <button
            //       className="flex justify-center items-center text-2xl text-main"
            //       onClick={() => setIsCommentEdit(!isCommentEdit)}
            //     >
            //       <RiEditBoxLine />
            //     </button>
            //     <button className="flex justify-center items-center text-2xl text-red-400 ml-4">
            //       <RiDeleteBin5Line />
            //     </button>
            //   </div>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardDetail;
