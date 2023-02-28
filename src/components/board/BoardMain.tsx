import { SubButton } from "@/styles/ui-components/styled-button";
import API_PATH from "@/utils/path/api";
import Path from "@/utils/path/routes";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BoardMain = () => {
  const navigate = useNavigate();
  const { API_GET_BOARD_PAGINATE, API_GET_BOARD } = API_PATH;
  const { BOARD } = Path;

  const boardInfoList = [
    {
      id: 0,
      title: "제목입니다",
      userId: "노기훈",
      date: "2030-01-10",
    },
    {
      id: 1,
      title: "제목입니다",
      userId: "노기훈",
      date: "2030-01-10",
    },
    {
      id: 2,
      title: "제목입니다",
      userId: "노기훈",
      date: "2030-01-10",
    },
    {
      id: 3,
      title: "제목입니다",
      userId: "노기훈",
      date: "2030-01-10",
    },
  ];

  useEffect(() => {
    //
  }, [API_GET_BOARD, API_GET_BOARD_PAGINATE]);

  return (
    <section className="w-[80vw] h-full flex flex-col items-center justify-center gap-4">
      {/* table */}
      <table className="w-full min-w-full h-fit overflow-hidden divide-y divide-sub rounded-lg shadow-md">
        {/* 헤더 */}
        <thead className="bg-sub text-white font-bold ">
          <tr className="text-left">
            <th scope="col" className="p-4">
              <div>글번호</div>
            </th>
            <th scope="col" className="p-4">
              <div>제목</div>
            </th>
            <th scope="col" className="p-4">
              <div>작성자</div>
            </th>
            <th scope="col" className="p-4">
              <div>등록일 </div>
            </th>
          </tr>
        </thead>
        {/* 바디 */}
        <tbody className="bg-white">
          {boardInfoList.map((boardInfo, index) => {
            return (
              <tr
                className="hover:bg-main cursor-pointer"
                onClick={() => {
                  navigate("/api/boards/:" + index, { replace: false });
                }}
              >
                <td className="p-4 text-sm font-bold">{boardInfo.id}</td>
                <td className="p-4 text-sm hover:underline hover:underline-offset-2 ">
                  {boardInfo.title}
                </td>
                <td className="p-4 text-sm">{boardInfo.userId}</td>
                <td className="p-4 text-sm">{boardInfo.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 글쓰기 버튼 */}
      <div className="w-full flex justify-end items-center gap-4">
        <SubButton
          className="px-6 hover:text-primary"
          onClick={() => {
            navigate(BOARD, { replace: false });
          }}
        >
          글쓰기
        </SubButton>
      </div>

      {/* pagenate */}
      <div className="flex flex-col items-end">
        <div className="items-center hidden md:flex gap-x-3">
          <SubButton className="!px-4 hover:text-primary">1</SubButton>
          <SubButton className="!px-4 hover:text-primary">2</SubButton>
        </div>
      </div>
    </section>
  );
};

export default BoardMain;
