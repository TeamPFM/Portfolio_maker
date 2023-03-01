import useBoardsQuery from "@/hooks/query/boards/useBoardsQuery";
import MainButton, { SubButton } from "@/styles/ui-components/styled-button";
import Path from "@/utils/path/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardMain = () => {
  const navigate = useNavigate();

  const { BOARD_NEW, BOARD } = Path;

  const [curNum, setCurNum] = useState<number>(0);
  const { data: boards } = useBoardsQuery(curNum);

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
          {boards?.map((b, index) => {
            return (
              <tr
                key={index}
                className="hover:bg-main cursor-pointer"
                onClick={() => {
                  navigate(`${BOARD}/${b.id}`, { replace: false });
                }}
              >
                <td className="p-4 text-sm font-bold">{b.id}</td>
                <td className="p-4 text-sm hover:underline hover:underline-offset-4 ">
                  {b.title}
                </td>
                <td className="p-4 text-sm">{b.users.name}</td>
                <td className="p-4 text-sm">{b.createdAt}</td>
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
            navigate(BOARD_NEW, { replace: false });
          }}
        >
          글쓰기
        </SubButton>
      </div>

      {/* pagenate */}
      <div className="flex flex-col items-end">
        <div className="items-center">
          <SubButton
            className="!px-4 hover:text-primary"
            onClick={() => {
              setCurNum(0);
              boards ? "" : alert("해당하는 게시물이 없습니다1");
            }}
          >
            1
          </SubButton>
          <SubButton
            className="!px-4 hover:text-primary"
            onClick={() => {
              setCurNum(1);
              boards ? "" : alert("해당하는 게시물이 없습니다2");
            }}
          >
            2
          </SubButton>
          <SubButton
            className="!px-4 hover:text-primary"
            onClick={() => {
              setCurNum(2);
              boards ? "" : alert("해당하는 게시물이 없습니다3");
            }}
          >
            3
          </SubButton>
          <SubButton
            className="!px-4 hover:text-primary"
            onClick={() => {
              setCurNum(3);
              boards ? "" : alert("해당하는 게시물이 없습니다4");
            }}
          >
            4
          </SubButton>
          <SubButton
            className="!px-4 hover:text-primary"
            onClick={() => {
              setCurNum(4);
              boards ? "" : alert("해당하는 게시물이 없습니다5");
            }}
          >
            5
          </SubButton>
        </div>
      </div>
    </section>
  );
};

export default BoardMain;
