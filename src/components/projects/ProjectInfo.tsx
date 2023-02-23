import ProjectResponse from "../../models/projects";
import { useNavigate } from "react-router-dom";
import { BasicButton } from "@/styles/ui-components/styled-button";
import { AiOutlinePlus } from "react-icons/ai";
import ProjectItem from "./Item/ProjectItem";

interface IProps {
  projects: ProjectResponse[];
}

const ProjectInfo = ({ projects }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh_-_80px)] pt-20 relative bg-white">
      <div className="projects flex flex-col items-center pt-28">
        <div className="flex flex-col relative gap-9">
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
              프로젝트 추가하기
            </span>
          </div>
          <div className="border-b border-b-gray-200 py-2">
            <span className="text-xl font-semibold">프로젝트</span>
          </div>
          <div className="flex flex-col w-[] gap-4">
            {projects.length === 0 && (
              <div className="flex justify-center items-center relative py-4 px-8 w-[573px] h-40 bg-white shadow-lg rounded-lg">
                <p className="text-lg text-coolGray-500 font-bold ">프로젝트를 추가해주세요!</p>
              </div>
            )}
            {projects &&
              projects.map((project) => <ProjectItem key={project.id} project={project} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
