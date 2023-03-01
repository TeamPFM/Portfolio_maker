import { useEffect, useState, useRef } from "react";
import { SubButton } from "@/styles/ui-components/styled-button";
import Path from "@/utils/path/routes";
import API_PATH from "@/utils/path/api";
import api from "@/libs/axios/api";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  BoardInfoGetResponse,
  StatusResponse,
  CommentCreateRequest,
} from "@/models/board/detail";
import CommentItem from "./CommentItem";
import { UserInfoGetResponse } from "@/models/myinfo";

const BoardDetail = (props: { boardId: string }) => {
  const navigate = useNavigate();
  const { BOARD, BOARD_UPDATE } = Path;
  const {
    API_GET_USER_INFO,
    API_GET_BOARD,
    API_COMMENT_CREATE,
    API_DELETE_BOARD,
  } = API_PATH;

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
    users: {
      id: 0,
      about: "",
      createdAt: "",
      deletedAt: "",
      email: "",
      imageName: "",
      imagePath: "",
      link: "",
      name: "",
      phone: "",
      updatedAt: "",
    },
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

  const dateParse = (date: string) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="px-5 w-full max-w-[1000px] m-auto">
      <div className="flex justify-between items-center">
        <SubButton
          className="flex items-center font-semibold text-white border-none mb-5"
          onClick={() => navigate(BOARD, { replace: true })}
        >
          <HiOutlineArrowLeft className="text-3xl pr-3" /> 목록으로
        </SubButton>

        {userId === boardInfo.users.id && (
          <div className="flex items-center">
            <SubButton
              className="flex justify-center items-center text-md !bg-main"
              onClick={() => {
                navigate(BOARD_UPDATE);
              }}
            >
              게시글 수정
            </SubButton>
            <SubButton
              className="flex justify-center items-center text-md !bg-red-400 ml-4"
              onClick={() => {
                if (confirm("정말로 삭제 하시겠습니까?")) {
                  api
                    .delete<StatusResponse>(
                      `${API_DELETE_BOARD}/${boardInfo.id}`
                    )
                    .then((res) => {
                      alert("삭제되었습니다.");
                      navigate(BOARD, { replace: true });
                    })
                    .catch((error) => console.log(error));
                }
              }}
            >
              게시글 삭제
            </SubButton>
          </div>
        )}
      </div>

      <div className="h-[500px] w-full bg-main-contra text-center rounded-md">
        <div className="flex flex-col items-start p-2 border-b bg-gray-100 rounded-t-md">
          <h2 className="text-lg font-semibold py-3">{boardInfo.title}</h2>
          <small className="text-gray-400">
            {dateParse(boardInfo.createdAt)}
          </small>
        </div>

        <p className="text-md p-4 text-left leading-normal">
          {boardInfo.content}
        </p>
      </div>

      <section className="flex flex-col w-full mt-8">
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
              commentUserInfo={comment.users}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BoardDetail;
