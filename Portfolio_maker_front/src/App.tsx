import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import HomePage from "./pages/home";
import Path from "./utils/routes/Path";

function App() {
  const { HOME, LOGIN, SIGNUP } = Path;

  return (
    <div className="App">
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        {/* 기훈 */}
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={SIGNUP} element={<SignupPage />} />
        {/* 동현 */}
        <Route path="login" element={<div></div>} />
        <Route path="login" element={<div></div>} />
        {/*  */}
        <Route path="login" element={<div></div>} />
        <Route path="login" element={<div></div>} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
