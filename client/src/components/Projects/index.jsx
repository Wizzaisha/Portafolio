import ProjectCard from "../ProjectCard";
import "./Projects.css";
import projectData from "../../../src/projectsData";

function Project () {



    return (
        

        <div>
            {projectData && projectData.map(project => {
                return (
                    <ProjectCard project={project} key={project.id}/>
                )
            })}
            
        </div>
    )
}


export default Project;