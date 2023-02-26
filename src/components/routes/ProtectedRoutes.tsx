import HomePage from "@/pages/home";
import WritePage from "@/pages/write";
import MyInfoPage from "@/pages/myinfo";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";
import ResumePage from "@/pages/resume";

const ProtectedRoutes = () => {
  const {
    HOME,
    LOGIN,
    SIGNUP,
    WRITE,
    MYINFO,
    RESUME,
  } = Path;

  return (
    // 로그인 되었을떄 보이는 페이지
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={MYINFO} element={<MyInfoPage />} />
      <Route path={WRITE} element={<WritePage />} />
      {/* Resume CRUD */}
      <Route path={RESUME} element={<ResumePage />} />
      {/*  */}
      <Route path={HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
