import Path from "@/utils/routes/Path";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillTrademarkCircle,
} from "react-icons/ai";
import MainButton, { DarkButton } from "@/styles/ui-components/styled-button";

import token from "@/libs/token";
import api from "@/libs/axios/api";
import AuthResponse, { LoginRequest } from "@/models/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { SIGNUP, HOME } = Path;

  const [canSeePW, setCanSeePW] = useState<boolean>(false);
  
  const [validPassed, setValidPassed] = useState<boolean>(false);

  const userEmailRef = useRef<HTMLInputElement | null>(null);
  const userPasswordFormRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className="w-[80vw] flex flex-col gap-8 items-center justify-center bg-white py-20 px-8 border rounded-xl shadow-md">
      <div className="flex flex-col gap-2 text-4xl px-12 py-6 rounded-full font-bold">
        <h1 className="">PortFolio Makers</h1>
      </div>
      {/* 입력 폼 */}
      <form className="w-full flex flex-col gap-4 text-lg">
        <div className="flex flex-col gap-2">
          {/* 아이디 */}
          <fieldset className="w-full flex flex-col gap-2">
            <input
              className={`border w-full h-8 rounded-sm py-8 px-4`}
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요."
              ref={userEmailRef}
              onChange={(evt) => {
                const emailExp =
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
              const newregisterEmail = evt.target.value;
              newregisterEmail.replace(emailExp, "");
              }}
              required
            />
          </fieldset>
          {/* 비밀번호 */}
          <fieldset className="w-full flex flex-col gap-2">
            <label className="relative">
              <input
                ref={userPasswordFormRef}
                className={`border w-full h-8 rounded-sm py-8 px-4 valid:border-success`}
                type={canSeePW ? "text" : "password"}
                name="password"
                placeholder="비밀번호를 입력해주세요."
                autoComplete="off"
                onChange={(evt) => {
                  // Check if 한글입력 등 when type="text"
                  const passwordExp = /[^A-Za-z\d$@$!%*#?&]/g;
                  evt.target.value = evt.target.value.replace(passwordExp, "");
                }}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
                required
              />
              <span
                className="absolute right-0 top-0 bottom-0 flex items-center -translate-x-1/2"
                onClick={() => {
                  setCanSeePW(!canSeePW);
                }}
              >
                {canSeePW && (
                  <AiFillEye className="text-gray-600 min-w-[1.5rem] min-h-[1.5rem]" />
                )}
                {!canSeePW && (
                  <AiFillEyeInvisible className="text-gray-600 min-w-[1.5rem] min-h-[1.5rem]" />
                )}
              </span>
            </label>
          </fieldset>
        </div>
        {/* 버튼 div */}
        <div className="w-full flex flex-col gap-4 text-2xl font-bold">
          <MainButton
            className="w-full !py-4"
            disabled={validPassed}
            onClick={(evt) => {
              // FIXME 유효성 체크
              // if (!validPassed) {
              //   evt.preventDefault();
              //   console.log(validPassed);
              // }
              const reqData: LoginRequest = {
                email: userEmailRef.current?.value ?? "",
                password: userPasswordFormRef.current?.value ?? "",
              };

              api
                .post<AuthResponse>("api/users/login", reqData)
                .then(({ data }) => {
                  token.setToken("token", data.token);
                  navigate(HOME, { replace: true });
                })
                .catch(console.error);
            }}
          >
            로그인
          </MainButton>

          <DarkButton
            className="w-full !py-4"
            onClick={() => {
              navigate(SIGNUP, { replace: true });
            }}
          >
            회원가입
          </DarkButton>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
