import React from "react";
import { useParams } from "react-router-dom";
import MainButton from "@/styles/ui-components/styled-button";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";

const BoardDetail = (props: { boardId: string }) => {
  return (
    <div className="px-5 w-full max-w-[1000px] m-auto">
      <div className="h-[500px] w-full bg-main text-center rounded">
        Board Detail Content
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="flex justify-between">
          <input
            type="text"
            className="flex-auto border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2 rounded-l-md"
          />
          <MainButton className="basis-[100px] shrink-0 border-none rounded-l-none hover:bg-indigo-500">
            댓글 쓰기
          </MainButton>
        </div>

        <ul className="flex flex-col w-full mt-5 bg-white">
          <li className="flex justify-between p-4">
            <p className="pr-4">
              댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용
            </p>

            <div className="flex items-center pr-4">
              <button className="flex justify-center items-center text-2xl text-main">
                <RiEditBoxLine />
              </button>
              <button className="flex justify-center items-center text-2xl text-red-400 ml-4">
                <RiDeleteBin5Line />
              </button>
            </div>
          </li>

          <li className="flex justify-between p-4 border-t">
            <p className="pr-4">
              댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
              내용
            </p>

            <div className="flex items-center pr-4">
              <button className="flex justify-center items-center text-2xl text-main">
                <RiEditBoxLine />
              </button>
              <button className="flex justify-center items-center text-2xl text-red-400 ml-4">
                <RiDeleteBin5Line />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoardDetail;
