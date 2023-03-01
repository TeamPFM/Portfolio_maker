import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import ResumePage from "@/pages/resume";
import SignupPage from "@/pages/signup";
import Path from "@/utils/path/routes";
import { Navigate, Route, Routes } from "react-router-dom";
import BoardPage from "@/pages/board";

const UnauthenticatedRoutes = () => {
  const { HOME, LOGIN, SIGNUP, WRITE, MYINFO, RESUME, BOARD } = Path;

  return (
    <Routes>
      {/* 비로그인 */}
      <Route path={HOME} element={<HomePage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path={BOARD} element={<BoardPage />} />
      <Route path={`${BOARD}/:id`} element={<BoardPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
