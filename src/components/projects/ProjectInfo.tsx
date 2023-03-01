import ProjectResponse from "@/models/projects";
import ProjectItem from "./Item/ProjectItem";

interface IProps {
  projects?: ProjectResponse[];
}
const ProjectInfo = ({ projects }: IProps) => {
  return (
    <>
      <section className="w-full bg-gray-800 text-white rounded-t-lg shadow-lg">
        <div className="p-5 bg-gray-800 border-solid rounded-t-lg">
          <span className="text-2xl font-semibold">Projects</span>
        </div>
      </section>

      <section className="bg-white flex flex-col text-black p-5 gap-5">
        {projects?.length === 0 && (
          <div className="flex justify-center items-center relative py-8 px-8 w-full h-40 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-coolGray-500 font-bold ">프로젝트를 작성해주세요!</p>
          </div>
        )}
        {projects?.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default ProjectInfo;
