import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/libs/axios/api";
import RowForm from "./RowForm";
import MainButton from "@/styles/ui-components/styled-button";
import Path from "@/utils/routes/Path";
import AuthResponse from "@/models/auth";

interface MyInfoRequest {
  email: string;
  name: string;
  phone: string;
  github: string;
  my_desc: string;
}

const essentialMark: string = `after:content-['*'] after:ml-1.5 after:text-red-400`;
const hideNumberArrow = `input::-webkit-outer-spin-button`;

const InfoContent = (props: { contentType: string }) => {
  const navigate = useNavigate();

  const { HOME } = Path;

  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const userPhoneRef = useRef<HTMLInputElement | null>(null);
  const userLinkRef = useRef<HTMLInputElement | null>(null);
  const userDescRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className="flex-auto relative rounded-xl bg-white shadow-lg overflow-auto">
      <h2 className="text-xl sticky top-0 text-center py-3 bg-indigo-400 text-white">
        {props.contentType}
      </h2>

      {props.contentType === "내 정보" ? (
        <div className="py-10 px-8">
          <fieldset className={`w-full flex items-center mb-8`}>
            <label
              className={`${essentialMark} basis-32 font-semibold`}
              htmlFor="email"
            >
              이메일
            </label>
            <input
              className="border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2"
              type="email"
              name="email"
              id="email"
              required
              disabled
              value={"tnstjd120@gmail.com"}
              ref={userEmailRef}
            />
          </fieldset>

          <fieldset className={`w-full flex items-center mb-8`}>
            <label className={`basis-32 font-semibold`} htmlFor="name">
              이름
            </label>
            <input
              className="border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2"
              type="text"
              name="name"
              id="name"
              ref={userNameRef}
            />
          </fieldset>

          <fieldset className={`w-full flex items-center mb-8`}>
            <label className={`basis-32 font-semibold`} htmlFor="phone">
              전화번호
            </label>
            <input
              className="border appearance-none w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2"
              type="text"
              name="phone"
              id="phone"
              ref={userPhoneRef}
              maxLength={13}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                  .replace(/(\-{1,2})$/g, "");
              }}
            />
          </fieldset>

          <fieldset className={`w-full flex items-center mb-8`}>
            <label className={`basis-32 font-semibold`} htmlFor="github">
              GitHub
            </label>
            <input
              className="border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2"
              type="text"
              name="github"
              id="github"
              ref={userLinkRef}
            />
          </fieldset>

          <fieldset className="mb-14">
            <label className={`font-semibold`} htmlFor="my_desc">
              내 소개
            </label>
            <textarea
              className="border w-full h-[400px] mt-3 resize-none rounded-sm py-3 px-4 focus:outline-none focus:border-main"
              name="my_desc"
              id="my_desc"
              placeholder="나에 대해 설명해주세요."
              required
              ref={userDescRef}
            />
          </fieldset>

          <div className="flex justify-end gap-5">
            <MainButton
              onClick={() => {
                if (confirm("정말로 탈퇴 하시겠습니까?????? 정말로??")) {
                  alert("탈퇴 되었습니다.");
                  navigate(HOME, { replace: true });
                  // (미완) Url 나올 때 까지 실제 회원 삭제는 기능은 아직
                }
              }}
            >
              회원 탈퇴
            </MainButton>

            <MainButton
              onClick={async () => {
                const reqData: MyInfoRequest = {
                  email: userEmailRef.current?.value ?? "",
                  name: userNameRef.current?.value ?? "",
                  phone: userPhoneRef.current?.value ?? "",
                  github: userLinkRef.current?.value ?? "",
                  my_desc: userDescRef.current?.value ?? "",
                };

                // (미완) url 나올 때 까지 구조만 짜둠
                await api
                  .post<AuthResponse>("/api/users", reqData)
                  .then(({ data }) => {
                    console.log(data);
                  })
                  .catch(console.error);
              }}
            >
              수정하기
            </MainButton>
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
