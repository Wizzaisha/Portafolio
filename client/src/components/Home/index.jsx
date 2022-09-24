import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./Home.css";

function Home () {


    return (
        <div>

            <Header />

            <div className="card contentContainer">
                <Outlet />
            </div>

        </div>
    )
}


export default Home;