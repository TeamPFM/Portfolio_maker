import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import ProjectInfo from "@/components/projects/ProjectInfo";
import AboutMe from "@/components/resume/profile/AboutMe";
import Path from "@/utils/path/routes";
import useProjectsQuery from "@/hooks/query/projects/useProjectsQuery";
import useUsersQuery from "@/hooks/query/users/useUsersQuery";
import { BasicButton } from "@/styles/ui-components/styled-button";
import ProfileMe from "../profile/ProfileMe";
import PlusBtn from "../base/plusBtn";

const ResumeMain = () => {
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
    <div className="h-full pt-10 relative">
      <div className="portfolio flex flex-col items-center">
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
