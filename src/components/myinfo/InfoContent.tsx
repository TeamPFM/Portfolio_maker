import Path from "@/utils/path/routes";
import API_PATH from "@/utils/path/api";
import token from "@/libs/token";
import api from "@/libs/axios/api";
import MainButton from "@/styles/ui-components/styled-button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoUpdateRequest, UserInfoUpdateResponse } from "@/models/myinfo";
import { MyInfoProps } from "@/pages/myinfo";
import SkillForm from "./SkillForm";

const essentialMark = "after:content-['*'] after:ml-1.5 after:text-red-400";

const InfoContent = (props: MyInfoProps) => {
  const navigate = useNavigate();
  const authToken = token.getToken("token");

  const { HOME } = Path;
  const { API_UPDATE_USER_INFO } = API_PATH;

  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const userPhoneRef = useRef<HTMLInputElement | null>(null);
  const userLinkRef = useRef<HTMLInputElement | null>(null);
  const userDescRef = useRef<HTMLTextAreaElement | null>(null);

  const [strSkills, setStrSkills] = useState<string>("");

  return (
    <div className="flex-auto relative rounded-xl bg-white shadow-lg overflow-auto">
      <h2 className="text-xl sticky top-0 text-center py-3 bg-indigo-400 text-white">
        내 정보
      </h2>

      <div className="py-10 px-8">
        <fieldset className={`w-full flex items-center mb-8`}>
          <label
            className={`basis-32 font-semibold ${essentialMark}`}
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
            readOnly
            defaultValue={props.userInfo?.email ?? ""}
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
            defaultValue={props.userInfo?.name ?? ""}
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
            defaultValue={props.userInfo?.phone ?? ""}
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
          <label className={`basis-32 font-semibold`} htmlFor="link">
            Link
          </label>
          <input
            className="border w-full leading-8 rounded-sm focus:outline-none focus:border-main px-2"
            type="text"
            name="link"
            id="link"
            defaultValue={props.userInfo?.link ?? ""}
            ref={userLinkRef}
          />
        </fieldset>

        <SkillForm
          strSkills={strSkills}
          setStrSkills={setStrSkills}
          initSkills={props.userInfo.skills.map((v) => v.name)}
        />

        <fieldset className="mb-14">
          <label className={`font-semibold`} htmlFor="about">
            내 소개
          </label>
          <textarea
            className="border w-full h-[400px] mt-3 resize-none rounded-sm py-3 px-4 focus:outline-none focus:border-main"
            name="about"
            id="about"
            placeholder="나에 대해 설명해주세요."
            defaultValue={props.userInfo?.about ?? ""}
            ref={userDescRef}
            required
          />
        </fieldset>

        <div className="flex justify-end gap-5">
          <MainButton
            onClick={() => {
              if (confirm("정말로 탈퇴 하시겠습니까?????? 정말로??")) {
                alert("탈퇴 되었습니다.");
                navigate(HOME, { replace: true });
                // (미완) api 나오고 작업
              }
            }}
          >
            회원 탈퇴
          </MainButton>

          <MainButton
            onClick={async () => {
              const reqData: UserInfoUpdateRequest = {
                name: userNameRef.current?.value ?? "",
                phone: userPhoneRef.current?.value ?? "",
                link: userLinkRef.current?.value ?? "",
                skill: strSkills,
                about: userDescRef.current?.value ?? "",
              };

              console.log(reqData);

              await api
                .patch<UserInfoUpdateResponse>(API_UPDATE_USER_INFO, reqData)
                .then((res) => {
                  console.log(res);
                  alert("수정되었습니다.");
                })
                .catch(console.error);
            }}
          >
            수정하기
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default InfoContent;
