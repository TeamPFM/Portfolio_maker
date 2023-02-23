import ProjectInfo from "@/components/projects/ProjectInfo";
import api from "@/libs/axios/api";
import ProjectResponse from "@/models/projects";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getFetchProject = async () => {
    setLoading(true);
    const { data } = await api.get<ProjectResponse[]>("http://localhost:5000/project");
    if (data) {
      setProjects(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchProject();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-[10%]">불러오는 중...</div>;
  }
  return (
    <>
      <ProjectInfo projects={projects} />
    </>
  );
};

export default Project;
