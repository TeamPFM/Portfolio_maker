import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Path from "./utils/routes/Path";

function App() {
  const { HOME, LOGIN, SIGNUP } = Path;

  return (
    <div className="w-screen h-screen bg-main bg-opacity-40">
      <Routes>
        <Route path={HOME} element={<div>잘됩니다</div>} />
        {/* 노기훈 */}
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={SIGNUP} element={<SignupPage />} />
        {/* 이동현 */}
        <Route path="login" element={<div></div>} />
        <Route path="login" element={<div></div>} />
        {/* 권숭성*/}
        <Route path="login" element={<div></div>} />
        <Route path="login" element={<div></div>} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
