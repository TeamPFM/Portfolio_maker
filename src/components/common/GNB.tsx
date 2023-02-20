import React, { useState } from "react";
import { Link } from "react-router-dom";

import H1 from "@/styles/ui-components/H1";
import Path from "@/utils/routes/Path";

const GNB = () => {
  const { HOME, LOGIN, SIGNUP } = Path;
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  return (
    <div className="fixed left-0 top-0 w-full h-20 flex align-middle justify-between px-5 drop-shadow z-10 bg-white border-b-2">
      <H1 className="logo">
        <Link to={HOME}>Portfolio Maker</Link>
      </H1>

      <nav>
        {isLogin ? (
          <ul className="flex space-x-4 items-center h-full">
            <li>
              <Link to={HOME} className="hover:text-indigo-300">
                포트폴리오
              </Link>
            </li>
            <li>
              <Link to={HOME}>게시판</Link>
            </li>
            <li>
              <Link to={LOGIN}>로그아웃</Link>
            </li>
            <li>
              <Link to={HOME}>내 정보</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex space-x-4 items-center h-full">
            <li>
              <Link to={HOME} className="hover:text-indigo-300 transition-all">
                포트폴리오
              </Link>
            </li>
            <li>
              <Link to={HOME}>게시판</Link>
            </li>
            <li>
              <Link to={LOGIN}>로그인</Link>
            </li>
            <li>
              <Link to={SIGNUP}>회원가입</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default GNB;
