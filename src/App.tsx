import { useLocation } from "react-router-dom";
import Path from "@/utils/path/routes";
import { useLayoutEffect, useState } from "react";
import GNB from "@components/common/GNB";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import token from "@libs/token";

function App() {
  const location = useLocation();
  const { HOME, LOGIN, SIGNUP, WRITE, MYINFO, RESUME, BOARD, BOARD_NEW, BOARD_UPDATE } = Path;

  const [hasNav, setHasNav] = useState<boolean>(false);
  const [RoutesComponent, setRoutesComponent] =
    useState<React.ReactElement | null>(null);

  const authToken = token.getToken("token");

  useLayoutEffect(() => {
    const authToken = token.getToken("token");
    console.log(authToken);
    authToken && setRoutesComponent(<ProtectedRoutes />);
    !authToken && setRoutesComponent(<UnauthenticatedRoutes />);
  }, [authToken]);

  useLayoutEffect(() => {
    const pathname =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasNav = [HOME, LOGIN, SIGNUP, WRITE, MYINFO, RESUME, BOARD, BOARD_NEW, BOARD_UPDATE].includes(
      pathname
    );

    setHasNav(hasNav);
  }, []);

  return (
    <div className="w-full h-full min-h-screen bg-main bg-opacity-40">
      <header>{hasNav && <GNB />}</header>
      <main className="w-full h-full pt-20">{RoutesComponent}</main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
