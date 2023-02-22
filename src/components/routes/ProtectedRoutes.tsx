import HomePage from "@/pages/home";
import WritePage from "@/pages/write";
import MyInfoPage from "@/pages/myinfo";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";
import ResumePage from "@/pages/resume";
import ResumeCreate from "../resume/ResumeCreate";
import ResumeRead from "../resume/ResumeRead";
import ResumeUpdate from "../resume/ResumeUpdate";
import ResumeDelete from "../resume/ResumeDelete";

const ProtectedRoutes = () => {
  const {
    HOME,
    LOGIN,
    SIGNUP,
    WRITE,
    MYINFO,
    RESUME,
    RESUME_CREATE,
    RESUME_DELETE,
    RESUME_READ,
    RESUME_UPDATE,
  } = Path;

  return (
    // 로그인 되었을떄 보이는 페이지
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={MYINFO} element={<MyInfoPage />} />
      <Route path={WRITE} element={<WritePage />} />
      {/* Resume CRUD */}
      <Route path={RESUME} element={<ResumePage />} />
      <Route path={RESUME_CREATE} element={<ResumeCreate />} />
      <Route path={RESUME_READ} element={<ResumeRead />} />
      <Route path={RESUME_UPDATE} element={<ResumeUpdate />} />
      <Route path={RESUME_DELETE} element={<ResumeDelete />} />
      {/*  */}
      <Route path={HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
