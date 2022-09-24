import "./ProjectCard.css";
import { 
    SiHeroku, 
    SiVercel, 
    SiJavascript, 
    SiReact, 
    SiExpress, 
    SiCss3, 
    SiHtml5,
    SiPostgresql,
    SiBootstrap,
    SiTrello,
    SiDjango,
    SiFlask,
    SiVuedotjs,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaNode } from "react-icons/fa";
import SlidesShow from "../SlidesShow";

function ProjectCard(props) {

    function getIcon (name, style) {
        switch (name) {
            case "javascript":
                return <SiJavascript className={style}/>;
            case "react":
                return <SiReact className={style}/>
            case "node":
                return <FaNode className={style}/>
            case "express":
                return <SiExpress className={style}/>
            case "css":
                return <SiCss3 className={style}/>
            case "html":
                return <SiHtml5 className={style}/>
            case "postgresql":
                return <SiPostgresql className={style}/>
            case "bootstrap":
                return <SiBootstrap className={style}/>
            case "Trello":
                return <SiTrello className={style}/>
            case "GitHub":
                return <AiFillGithub className={style}/>
            case "django":
                return <SiDjango className={style}/>
            case "flask":
                return <SiFlask className={style}/>
            case "vuejs":
                return <SiVuedotjs className={style}/>
            default:
                return name;
        }
    }

    return (
        <div className="container-fluid">
            {props.project && 
                <div key={props.project.id} className="card projectCard row">
                    <div className="carHeader">
                        <h3>{<FiSettings />} {props.project.title}</h3>
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
                                    <p><b>Repositorio</b></p>
                                    <a href={props.project.repository} target="_blank" rel="noopener noreferrer"><AiFillGithub className="linksIcons" /></a>
                                </div>
                                <div>
                                    {props.project.deployBack.length > 0 
                                        ?
                                            <div>
                                                <p><b>Deploy del Back</b></p>
                                                <a href={props.project.deployBack} target="_blank" rel="noopener noreferrer"><SiHeroku className="linksIcons"/></a>
                                            </div>
                                        :   null
                                    }
                                </div>
                                <div>
                                    {props.project.deployFront.length > 0 
                                        ?
                                            <div>
                                                <p><b>Deploy del Front</b></p>
                                                <a href={props.project.deployFront} target="_blank" rel="noopener noreferrer"><SiVercel className="linksIcons"/></a>
                                            </div>
                                        :   null
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div className="col col-md-8 projectImgsContainer">

                            <div className="slidesContainer">
                                <SlidesShow images={props.project.images}/>
                            </div>
                            <div className="techAndTools">
                                <div className="extraDiv">
                                    <p><b>Tecnologías</b></p>
                                    <div className="techContainer">
                                        {props.project.technologies && props.project.technologies.map((e, index) => {
                                            return (
                                                <ul key={index}>
                                                    <li>{getIcon(e, "icons")}</li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="extraDiv">
                                    <p><b>Herramientas</b></p>
                                    <div className="toolsContainer">
                                        {props.project.tools && props.project.tools.map((e, index) => {
                                            return (
                                                <ul key={index}>
                                                    <li>{getIcon(e, "icons")}</li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default ProjectCard;