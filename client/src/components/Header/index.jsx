import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    return (
        <div className="container-fluid headerContainer">
            <div className="row">
                <div className="col col-mg-6 titleContainer">
                    <div>
                        <h1 className="mainTitle">Ever Ramirez Mahecha</h1>
                        <p className="subTitle">Ingeniero Ambiental & Desarrollador Full Stack</p>
                    </div>
                </div>
                <div className="col col-mg-6 navBarContainer">
                    <ul className="navBar">
                    <li><Link to="/" className={`linkNavBar radiusLeft ${location.pathname === "/" ? "active" : "" }`} >Home</Link></li>
                        <li><Link to="/about" className={`linkNavBar ${location.pathname === "/about" ? "active" : "" }`} >About</Link></li>
                        <li><Link to="/contact" className={`linkNavBar ${location.pathname === "/contact" ? "active" : "" }`} >Contact</Link></li>
                        <li><Link to="/projects" className={`linkNavBar radiusRight ${location.pathname === "/projects" ? "active" : "" }`} >Projects</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header;