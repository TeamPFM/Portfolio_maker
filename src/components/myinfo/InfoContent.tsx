import { useState } from "react";

import RowForm from "./RowForm";
import MainButton from "@/styles/ui-components/styled-button";

const essentialMark: string = `after:content-['*'] after:ml-1.5 after:text-red-400`;

const InfoContent = (props: { contentType: string }) => {
  return (
    <div className="flex-auto relative rounded-xl bg-white shadow-lg overflow-hidden">
      <h2 className="text-xl text-center py-3 bg-indigo-400 text-white">
        {props.contentType}
      </h2>

      {props.contentType === "내 정보" ? (
        <div className="py-10 px-8">
          <RowForm
            className={"mb-8"}
            title="이메일"
            inputType="email"
            inputName="email"
            essentialMark={essentialMark}
          />

          <RowForm
            className="mb-8"
            title="이름"
            inputType="text"
            inputName="name"
            essentialMark={essentialMark}
          />

          <RowForm
            className="mb-8"
            title="전화번호"
            inputType="text"
            inputName="phone"
            essentialMark=""
          />

          <RowForm
            className="mb-14"
            title="GitHub"
            inputType="text"
            inputName="github"
            essentialMark=""
          />

          <div>
            <label
              className={`${essentialMark} font-semibold`}
              htmlFor="my_introduction"
            >
              내 소개
            </label>
            <textarea
              className="border w-full h-[400px] mt-3 resize-none rounded-sm py-3 px-4 focus:outline-none focus:border-main"
              name="my_introduction"
              id="my_introduction"
              placeholder="나에 대해 설명해주세요."
              required
            />
          </div>

          <div className="absolute bottom-8 right-0 flex gap-5 px-8">
            <MainButton className="">회원탈퇴</MainButton>
            <MainButton className="">수정하기</MainButton>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-10 w-full h-full py-10 px-8">
          <MainButton className="h-1/2 w-1/2">이력서 생성</MainButton>
          <MainButton className="h-1/2 w-1/2">이력서 보기</MainButton>
        </div>
      )}
    </div>
  );
};

export default InfoContent;
