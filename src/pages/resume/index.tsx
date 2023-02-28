import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import ProjectInfo from "@/components/projects/ProjectInfo";
import AboutMe from "@/components/resume/AboutMe";
import ProfileMe from "@/components/resume/ProfileMe";
import Path from "@/utils/path/routes";
import useProjectsQuery from "@/hooks/query/projects/useProjectsQuery";
import useUsersQuery from "@/hooks/query/users/useUsersQuery";
import { BasicButton } from "@/styles/ui-components/styled-button";

const ResumePage = () => {
  const navigate = useNavigate();
  const { WRITE, MYINFO } = Path;

  const { data: userData, isError: userIsError, isLoading: userIsLoading } = useUsersQuery();

  const {
    data: projectsData,
    isError: projectsIsError,
    isLoading: projectsIsLoading,
  } = useProjectsQuery(Number(userData?.id));

  if (projectsIsLoading || userIsLoading) {
    return <div className="flex justify-center py-[10%]">불러오는 중...</div>;
  }
  if (projectsIsLoading || userIsLoading) {
    return <div className="flex justify-center py-[10%]">불러오는 중...</div>;
  }
  return (
    <div className="h-[calc(100vh_-_80px)] pt-10 relative bg-white">
      <div className="portfolio flex flex-col items-center">
        <div className="flex flex-col pb-8 gap-12 w-1/2">
          {/* user's Resume */}
          <section className="relative">
            <div className="add-btn absolute top-[7px] right-0 w-[150px]">
              <BasicButton
                onClick={() => {
                  navigate(MYINFO, { replace: false });
                }}
              >
                <AiOutlinePlus size={12} />
              </BasicButton>
              <span
                className="hover:text-gray-500 cursor-pointer px-2"
                onClick={() => {
                  navigate(MYINFO, { replace: false });
                }}
              >
                내정보 관리
              </span>
            </div>
            {userData && <ProfileMe users={userData} />}
          </section>
          {/* about_me */}
          <section className="relative">
            <div className="add-btn absolute top-[7px] right-0 w-[150px]">
              <BasicButton
                onClick={() => {
                  navigate(MYINFO, { replace: false });
                }}
              >
                <AiOutlinePlus size={12} />
              </BasicButton>
              <span
                className="hover:text-gray-500 cursor-pointer px-2"
                onClick={() => {
                  navigate(MYINFO, { replace: false });
                }}
              >
                내정보 관리
              </span>
            </div>
            <AboutMe about={userData?.about} />
          </section>
          {/* projects */}
          <section className="relative">
            <div className="add-btn absolute top-[7px] right-0 w-[150px]">
              <BasicButton
                onClick={() => {
                  navigate(WRITE, { replace: false });
                }}
              >
                <AiOutlinePlus size={12} />
              </BasicButton>
              <span
                className="hover:text-gray-500 cursor-pointer px-2"
                onClick={() => {
                  navigate(WRITE, { replace: false });
                }}
              >
                프로젝트 추가
              </span>
            </div>
            {projectsData && <ProjectInfo projects={projectsData} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
