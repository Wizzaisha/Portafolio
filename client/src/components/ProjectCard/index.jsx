import "./ProjectCard.css";
import { SiHeroku, SiVercel } from "react-icons/si";
import SlidesShow from "../SlidesShow";

function ProjectCard(props) {

    return (
        <div className="container-fluid">
            {props.project && 
                <div key={props.project.id} className="card projectCard row">
                    <div className="carHeader">
                        <h3>{props.project.title}</h3>
                        <p>{props.project.description}</p>
                    </div>

                    <div className="row imagesAndFunctionalities">
                        <div className="col col-md-4 functionalitiesAndLinks">
                            <div className="functionalities">
                                <h5>Funcionalidades</h5>
                                {props.project.functionalities && props.project.functionalities.map((e, index) => {
                                    return (
                                        <ul key={index} className="listFunct">
                                            <li>{e}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className="interestLinks">
                                <div>
                                    <p>Repositorio</p>
                                    <a href={props.project.repository} target="_blank" rel="noopener noreferrer"><img src="/assets/images/GitHub-Mark-120px-plus.png" alt="repo"></img></a>
                                </div>
                                <div>
                                    {props.project.deployBack.length > 0 
                                        ?
                                            <div>
                                                <p>Deploy del Back</p>
                                                <a href={props.project.deployBack} target="_blank" rel="noopener noreferrer"><SiHeroku /></a>
                                            </div>
                                        :   null
                                    }
                                </div>
                                <div>
                                    {props.project.deployFront.length > 0 
                                        ?
                                            <div>
                                                <p>Deploy del Front</p>
                                                <a href={props.project.deployFront} target="_blank" rel="noopener noreferrer"><SiVercel /></a>
                                            </div>
                                        :   null
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className="col col-md-8 projectImgsContainer">
                            <SlidesShow images={props.project.images}/>
                        </div>

                    </div>
                    
                    <div className="techAndTools">
                        <div>
                            <p>Tecnologías</p>
                            {props.project.technologies && props.project.technologies.map((e, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{e}</li>
                                    </ul>
                                )
                            })}
                        </div>
                        <div>
                            <p>Herramientas</p>
                            {props.project.tools && props.project.tools.map((e, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{e}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}


export default ProjectCard;