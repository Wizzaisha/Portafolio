import "./MainPage.css";
import cvPdf from "../../Pdf/cv.pdf";
import { BiUserPin } from "react-icons/bi";

function MainPage() {

    return (
        <div className="container-fluid mainPageContainer">
            <div className="welcomeContainer">
                <h1 className="mainPageTitle">Bienvenido a mi portafolio</h1>
                <p className="mainPageText">Hola! o7 gracias por visitar mi portafolio; aquí podras ver los proyectos en los que he trabajado, habilidades y detalles sobre mi.</p>
            </div>
            <div className="linksContainer">
                <div>
                    <p>Perfil Linkedin</p>
                    <a href="https://www.linkedin.com/in/ever-ramirez-mahecha-8b6708137/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/linkeding.png" alt="lindekin" className="profilesLinks"></img></a>
                </div>

                <div>
                    <p>Perfil GitHub</p>
                    <a href="https://github.com/Wizzaisha" target="_blank" rel="noopener noreferrer"><img src="/assets/images/GitHub-Mark-120px-plus.png" alt="lindekin" className="profilesLinks"></img></a>
                </div>
                <div >
                    <p>Mi CV</p>
                    <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="pdfLink"><BiUserPin className="profilesLinks" /></a>
                </div>
            </div>

            <div className="imgExtraContainer">
                <img src="/assets/images/phoenix2.png" alt="phoenix" className="extraImg"></img>
                <img src="/assets/images/chicken.png" alt="chicken" className="extraImg"></img>
            </div>
        </div>
    )
}


export default MainPage;