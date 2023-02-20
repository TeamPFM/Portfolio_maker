import HomePage from "@/pages/home";
import WritePage from "@/pages/write";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  const { HOME, LOGIN, SIGNUP, WRITE, MYINFO } = Path;

  return (
    // 로그인 되었을떄 보이는 페이지
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      {/* 마이인포 page 작업 */}
      <Route path={MYINFO} element={<HomePage />} />
      <Route path={WRITE} element={<WritePage />} />
      <Route path={HOME} element={<HomePage />} />
      <Route path={HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
