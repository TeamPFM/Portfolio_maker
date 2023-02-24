import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutMeInfo from "@/components/aboutme/ProfileInfo";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectResponse from "@/models/projects";
import usersResponse from "@/models/users";
import { AiOutlinePlus } from "react-icons/ai";
import { BasicButton } from "@/styles/ui-components/styled-button";
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
            <AboutMeInfo users={users} />
          </section>
          {/* about_me */}
          <section>
            <div>
              <div className="border-l-4 border-l-slate-400 border-b border-b-gray-200 px-3 py-2">
                <span className="text-xl font-semibold">About me</span>
              </div>
              <div className="">
                <div className="pt-8">
                  <div className="flex justify-center items-center relative py-8 px-8 w-full h-40 bg-white shadow-lg rounded-lg">
                    <p className="text-lg text-coolGray-500 font-bold ">소개글을 작성해주세요!</p>
                  </div>
                </div>
              </div>
            </div>
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
