import { useNavigate } from "react-router-dom";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectResponse from "@/models/projects";
import UsersResponse from "@/models/users";
import { AiOutlinePlus } from "react-icons/ai";
import { BasicButton } from "@/styles/ui-components/styled-button";
import AboutMe from "@/components/resume/AboutMe";
import ProfileMe from "@/components/resume/ProfileMe";
import api from "@/libs/axios/api";
import { useQuery } from "@tanstack/react-query";

const getFetchUsers = async () => {
  const { data } = await api.get<UsersResponse>("/api/users/info");
  return data;
};

const getFetchProject = async (userId: number) => {
  // [Request] /api/projects?user-id=userId
  const { data } = await api.get<{ projects: ProjectResponse[] }>(
    `/api/projects?user-id=${userId}`
  );
  console.log(data);
  return data.projects;
};

const ResumePage = () => {
  const navigate = useNavigate();

  const {
    data: userData,
    isError: userIsError,
    isLoading: userIsLoading,
  } = useQuery<UsersResponse>({
    queryKey: ["users"],
    queryFn: () => getFetchUsers(),
  });

  const {
    data: projectsData,
    isError: projectsIsError,
    isLoading: projectsIsLoading,
  } = useQuery({
    queryKey: ["projects", Number(userData?.id)],
    queryFn: () => getFetchProject(Number(userData?.id)),
    enabled: !!userData?.id,
  });

  if (projectsIsLoading || userIsLoading) {
    return <div className="flex justify-center py-[10%]">불러오는 중...</div>;
  }
  return (
    <div className="h-[calc(100vh_-_80px)] pt-10 relative bg-white">
      <div className="portfolio flex flex-col items-center">
        <div className="flex flex-col pb-8 gap-12 w-[35%]">
          {/* user's Resume */}
          <section className="about_me relative">
            <div className="add-btn absolute top-[7px] right-0 w-[150px]">
              <BasicButton
                onClick={() => {
                  navigate("/write", { replace: false });
                }}
              >
                <AiOutlinePlus size={12} />
              </BasicButton>
              <span
                className="hover:text-gray-500 cursor-pointer px-2"
                onClick={() => {
                  navigate("/myinfo", { replace: false });
                }}
              >
                내정보 관리
              </span>
            </div>
            <ProfileMe users={userData} />
          </section>
          {/* about_me */}
          <section className="relative">
            <div className="add-btn absolute top-[7px] right-0 w-[150px]">
              <BasicButton
                onClick={() => {
                  navigate("/write", { replace: false });
                }}
              >
                <AiOutlinePlus size={12} />
              </BasicButton>
              <span
                className="hover:text-gray-500 cursor-pointer px-2"
                onClick={() => {
                  navigate("/myinfo", { replace: false });
                }}
              >
                내정보 관리
              </span>
            </div>
            <AboutMe about={userData?.about} />
          </section>
          {/* projects */}
          <section className="projects relative">
            <div className="add-btn absolute top-[7px] right-0 w-[150px]">
              <BasicButton
                onClick={() => {
                  navigate("/write", { replace: false });
                }}
              >
                <AiOutlinePlus size={12} />
              </BasicButton>
              <span
                className="hover:text-gray-500 cursor-pointer px-2"
                onClick={() => {
                  navigate("/write", { replace: false });
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
