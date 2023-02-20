import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import Path from "@utils/routes/Path";
import { Navigate, Route, Routes } from "react-router-dom";

const UnauthenticatedRoutes = () => {
  const { HOME, LOGIN, SIGNUP, WRITE, MYINFO } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
