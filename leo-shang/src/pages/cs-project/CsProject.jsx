import { useParams } from "react-router-dom";
import CsProjects from "./../../assets/CsProjects/CsProjects.json";

const CSProject = () => {
  const { name } = useParams();

  console.log(name);

  const project = CsProjects.CSProjects.find(
    (project) => project.name === name
  );

  if (!project) {
    return (
      <div className="font-digifit flex justify-center items-center h-screen">
        Project not found
      </div>
    );
  }

  return (
    <div className="flex flex-col relative items-center h-screen justify-center">
      <div className="lg:w-[900px]">
        <img src={project.images[1]} alt={`${project.name} Image 1`} />
      </div>
    </div>
  );
};

export default CSProject;
