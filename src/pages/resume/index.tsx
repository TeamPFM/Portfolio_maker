import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectResponse from "@/models/projects";
import usersResponse from "@/models/users";
import { AiOutlinePlus } from "react-icons/ai";
import { BasicButton } from "@/styles/ui-components/styled-button";
import AboutMe from "@/components/resume/AboutMe";
import ProfileMe from "@/components/resume/ProfileMe";
const ResumePage = () => {
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [users, setUsers] = useState<usersResponse | null>(null);
  const [projectLoading, setProjectLoading] = useState<boolean>(false);
  const [usersLoading, setUsersLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  if (projectLoading || usersLoading) {
    return <div className="flex justify-center py-[10%]">불러오는 중...</div>;
  }
  return (
    <div className="h-[calc(100vh_-_80px)] pt-20 relative bg-white">
      <div className="projects flex flex-col items-center pt-28">
        <div className="flex flex-col pb-8 gap-12 w-[35%]">
          {/* user's Resume */}
          <section className="about_me relative">
            <div className="add-btn absolute top-[7px] right-0">
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
            <ProfileMe users={users} />
          </section>
          {/* about_me */}
          <section>
            <AboutMe about={users?.about} />
          </section>
          {/* projects */}
          <section className="projects relative">
            <div className="add-btn absolute top-[7px] right-0">
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
            <ProjectInfo projects={projects} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
