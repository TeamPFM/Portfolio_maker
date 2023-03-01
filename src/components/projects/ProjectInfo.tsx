import ProjectResponse from "@/models/projects";
import ProjectItem from "./Item/ProjectItem";

interface IProps {
  projects?: ProjectResponse[];
}
const ProjectInfo = ({ projects }: IProps) => {
  return (
    <>
      <div className="border-l-4 border-l-slate-400 border-b border-b-gray-200 px-3 py-2">
        <span className="text-2xl font-semibold">Projects</span>
      </div>
      <div className="flex flex-col items-center gap-4 pt-8">
        {projects?.length === 0 && (
          <div className="flex justify-center items-center relative py-8 px-8 w-full h-40 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-coolGray-500 font-bold ">프로젝트를 작성해주세요!</p>
          </div>
        )}
        {projects?.map((project) => <ProjectItem key={project.id} project={project} />)}
      </div>
    </>
  );
};

export default ProjectInfo;
