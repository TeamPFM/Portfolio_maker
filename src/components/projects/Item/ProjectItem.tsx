import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectResponse from "@/models/projects";
import api from "@/libs/axios/api";
import DrowDownMenu from "../Menu/DrowDownMenu";

interface IProps {
  project: ProjectResponse;
}

const TitleStyle = "text-lg font-semibold";

const ProjectItem = ({ project }: IProps) => {
  const { id, projectName, desc, link } = project;
  const navigate = useNavigate();

  const onRemoveProject = (projectId: number) => {
    const deleteFetchProjectData = () => {
      api.delete<ProjectResponse>(`http://localhost:5000/project/${projectId}`);
      navigate("/", { replace: true });
    };
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteFetchProjectData();
    }
  };

  const onEditProject = () => {};

  return (
    <div key={id} className="p-item relative py-4 px-8 w-[573px] bg-white shadow-lg rounded-lg">
      <div className="flex flex-col w-[95%] gap-4">
        <div className="absolute top-[1rem] right-2">
          <DrowDownMenu
            key={id}
            id={id}
            onRemoveProject={onRemoveProject}
            onEditProject={onEditProject}
          />
        </div>
        <div>
          <span className={`${TitleStyle}`}>{projectName}</span>
        </div>
        <div>
          <div>
            <span className={`${TitleStyle}`}>설명</span>
          </div>
          <span>{desc}</span>
        </div>
        <div>
          <div>
            <span className={`${TitleStyle}`}>관련 링크</span>
          </div>
          <Link to={link} target="_blank">
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
