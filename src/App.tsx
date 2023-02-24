import { useLocation } from "react-router-dom";
import Path from "./utils/routes/Path";
import { useLayoutEffect, useState } from "react";
import GNB from "./components/common/GNB";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "./components/routes/UnauthenticatedRoutes";
import token from "./libs/token";

function App() {
  const location = useLocation();
  const { HOME, LOGIN, SIGNUP, WRITE, MYINFO, RESUME } = Path;

  const [hasNav, setHasNav] = useState<boolean>(false);
  const [RoutesComponent, setRoutesComponent] =
    useState<React.ReactElement | null>(null);

  useLayoutEffect(() => {
    const gettoken = token.getToken("token");
    console.log(gettoken);
    // FIXME 토큰받으면 토큰으로 처리
    gettoken && setRoutesComponent(<ProtectedRoutes />);
    !gettoken && setRoutesComponent(<UnauthenticatedRoutes />);
  }, []);

  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasNav = [HOME, LOGIN, SIGNUP, WRITE, MYINFO, RESUME].includes(
      pathname
    );

    setHasNav(hasNav);
  }, []);

  return (
    <div className="w-screen h-screen bg-main bg-opacity-40">
      <header>{hasNav && <GNB />}</header>
      <main className="w-full h-full pt-20">
        <div className={`w-full h-full`}>{RoutesComponent}</div>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
