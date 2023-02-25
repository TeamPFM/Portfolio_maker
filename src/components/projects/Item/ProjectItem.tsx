import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectResponse from "@/models/projects";
import api from "@/libs/axios/api";
import DrowDownMenu from "../Menu/DrowDownMenu";
import useDeleteProjectMutation from "@/hooks/mutation/project/useDeleteProjectMutation";

interface IProps {
  project: ProjectResponse;
}

const ProjectItem = ({ project }: IProps) => {
  const { id, name, description, link } = project;
  const navigate = useNavigate();
  const mutatation = useDeleteProjectMutation();

  const onRemoveProject = (projectId?: number) => {
    if (projectId && window.confirm("정말 삭제하시겠습니까?")) {
      mutatation.mutate(projectId);
    }
  };

  const onEditProject = () => {};

  return (
    <div key={id} className="p-item relative py-4 px-8 w-full bg-white shadow-lg rounded-lg">
      <div>
        <div className="absolute top-4 right-2">
          <DrowDownMenu
            key={id}
            id={id}
            onRemoveProject={onRemoveProject}
            onEditProject={onEditProject}
          />
        </div>
        <div className="py-2">
          <span className="text-[22px] font-bold">{name}</span>
        </div>
        <div className="py-2">
          <div>
            <span className="text-[20px] font-semibold">설명</span>
          </div>
          <span className="text-[18px]">{description}</span>
        </div>
        <div className="py-2">
          <div>
            <span className="text-[20px] font-semibold">관련 링크</span>
          </div>
          <Link to={link} target="_blank">
            <span className="text-[18px]">{link}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
