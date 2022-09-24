import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    return (
        <div className="container-fluid headerContainer">
            <div className="navAndTitleContainer">
                <div className="titleContainer">
                    <div>
                        <h1 className="mainTitle">Ever Ramirez Mahecha</h1>
                        <p className="subTitle">Ingeniero Ambiental 🌿 & Desarrollador Full Stack 💻</p>
                    </div>
                </div>
                <div className="navBarContainer">
                    <div className="navBar">
                        <ul>
                            <Link to="/" className="linksNav"><li className={`linkNavBar radiusLeft ${location.pathname === "/" ? "active" : "" }`}>Inicio</li></Link>
                            <Link to="/about" className="linksNav"><li className={`linkNavBar ${location.pathname === "/about" ? "active" : "" }`}>Sobre mi</li></Link>
                            <Link to="/projects" className="linksNav"><li className={`linkNavBar ${location.pathname === "/projects" ? "active" : "" }`}>Proyectos</li></Link>
                            <Link to="/contact" className="linksNav"><li className={`linkNavBar radiusRight ${location.pathname === "/contact" ? "active" : "" }`}>Contacto</li></Link>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header;