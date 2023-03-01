import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProjectInfo from "@/components/projects/ProjectInfo";
import AboutMe from "@/components/resume/profile/AboutMe";
import Path from "@/utils/path/routes";
import useProjectsQuery from "@/hooks/query/projects/useProjectsQuery";
import ProfileMe from "../profile/ProfileMe";
import PlusBtn from "../base/plusBtn";
import api from "@/libs/axios/api";
import token from "@/libs/token";
import UsersResponse from "@/models/users";
import { SubButton } from "@/styles/ui-components/styled-button";
import { HiOutlineArrowLeft } from "react-icons/hi";
import useUsersQuery, { useUsersInfoQuery } from "@/hooks/query/users/useUsersQuery";

const ResumeMain = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const params = useParams();
  const { WRITE, MYINFO } = Path;
  const authToken = token.getToken("token");
  const [userData, setUserData] = useState<UsersResponse | undefined>();
  const [loading, setLoading] = useState<boolean>();
  const { BOARD, BOARD_UPDATE } = Path;

  useEffect(() => {
    if (authToken) {
      setLoading(true)
      api.get<UsersResponse>("/api/users/info").then((res) => {
        setUserData(res.data);
        setLoading(false)
      });
    } else {
      setLoading(true)
      api.get<UsersResponse>(`/api/users/info/${params && params.id}`).then((res) => {
        setUserData(res.data);
        setLoading(false)
      });
    }
  }, []);

  const {
    data: projectsData,
    isError: projectsIsError,
    isLoading: projectsIsLoading,
  } = useProjectsQuery(Number(state || userData?.id));

  if (loading) {
    return <div className="flex justify-center py-[10%]">불러오는 중...</div>;
  }
  return (
    <div className="h-full pt-10 relative">
      <div className="portfolio flex flex-col items-center">
        <div className="fixed top-2 left-2">
          <SubButton
            className="flex items-center font-semibold text-white border-none mb-5"
            onClick={() => navigate(BOARD, { replace: true })}
          >
            <HiOutlineArrowLeft className="text-3xl pr-3" /> 게시판으로
          </SubButton>
        </div>
        <div className="flex flex-col pb-8 gap-20 w-1/2">
          {/* user's Resume */}
          <section className="relative">
            <PlusBtn className="top-[12px]" path={MYINFO} text="내정보 관리" />
            {userData && <ProfileMe users={userData} />}
          </section>
          {/* about_me */}
          <section className="relative">
            <PlusBtn className="top-[12px]" path={MYINFO} text="내정보 관리" />
            <AboutMe about={userData?.about} />
          </section>
          {/* projects */}
          <section className="relative">
            <PlusBtn className="top-[12px]" path={WRITE} text="프로젝트 추가" />
            {projectsData && <ProjectInfo projects={projectsData} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeMain;
