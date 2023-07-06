import "./About.css";
import { GiTeamIdea, GiSandsOfTime, GiAnvilImpact } from "react-icons/gi";
import { FcReadingEbook, FcIdea } from "react-icons/fc";

function About () {


    return (
        <div className="container-fluid">
            <div className="row">
                
                
                <div className="presentation">
                    <img src="https://avatars.githubusercontent.com/u/86801763?v=4" alt="img" className="picture" />
                    <div>
                        <h3 className="miniTitle">Detalles sobre mi</h3>
                        <p className="detailsAbout">
                            Soy Ingeniero Ambiental y Desarrollador Full Stack; me apasiona el 
                            mundo de la tecnología, la programación y aprender cosas nuevas. 
                            Tengo experencia como Freelancer en el área de educación no formal; 
                            tambíen he desarrollado proyectos de aplicaciones Web sobre e-commerce
                            y de uso de APIs como RAWG.
                        </p>
                    </div>

                </div>
            
            </div>
            <div className="tecSkills">
                <h3 className="skillsTitle">Habilidades técnicas</h3>
                
                <div className="skills">
                    <div className="skillContainer">
                        <h5>Lenguajes de programación</h5>
                        
                        <div className="imgContainer">
                            <p><a href="https://www.python.org" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" className="skillsImg"/></a> </p>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className="skillsImg"/></a></p>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <h5>Desarrollo Frontend</h5>
                        <div className="imgContainer">
                            <p><a href="https://angular.io/" target="_blank" rel="noopener noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png" alt="angular" className="skillsImg"/></a></p>
                            <p><a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" className="skillsImg"/></a></p>
                            <p><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className="skillsImg"/></a></p>
                            <p><a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className="skillsImg"/></a></p>
                            <p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className="skillsImg"/> </a></p>
                            <p><a href="https://redux.js.org" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className="skillsImg"/> </a></p>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <h5>Desarrollo Backend</h5>
                        <div className="imgContainer">
                            <p><a href="https://expressjs.com" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" className="skillsImg"/></a></p>
                            <p><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" className="skillsImg"/> </a></p>
                            <p><a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" className="skillsImg"/> </a></p>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <h5>Bases de datos</h5>
                        <div className="imgContainer">
                            <p><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" className="skillsImg"/> </a></p>
                            <p><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" className="skillsImg"/> </a></p>
                            <p><a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" className="skillsImg"/> </a></p>
                        </div>
                    
                    </div>
                    <div className="skillContainer">
                        <h5>Tecnologías en proceso de aprendizaje</h5>
                        <div className="imgContainer">
                            <p><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="nextjs" className="skillsImg"/></a></p>
                            <p><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" className="skillsImg"/></a></p>
                            <p><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" className="skillsImg"/> </a></p>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <h5>Otras</h5>
                        <div className="imgContainer">
                            <p><a href="https://www.atlassian.com/es/software/jira" target="_blank" rel="noopener noreferrer"><img src="https://logowik.com/content/uploads/images/jira3124.jpg" alt="github" className="skillsImg"/></a></p>
                            <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/GitHub-Mark-120px-plus.png" alt="github" className="skillsImg"/></a></p>
                            <p>Metodología agile SCRUM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="softSkills">
                <h3 className="skillsTitle">Habilidades blandas</h3>

                <div className="skills">
                    <div className="skillContainer">
                        <h5>Trabajo en equipo</h5>
                        <GiTeamIdea className="skillsImg"/>
                    </div>
                    <div className="skillContainer">
                        <h5>Trabajo autónomo</h5>
                        <FcReadingEbook className="skillsImg"/>
                    </div>
                    <div className="skillContainer">
                        <h5>Gestión del timpo</h5>
                        <GiSandsOfTime className="skillsImg" />
                    </div>
                    <div className="skillContainer">
                        <h5>Innovación</h5>
                        <FcIdea className="skillsImg" />
                    </div>
                    <div className="skillContainer">
                        <h5>Adaptabilidad</h5>
                        <GiAnvilImpact className="skillsImg" />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default About;