import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./Home.css";

function Home () {


    return (
        <div>

            <Header />

            <div>
                <Outlet />
            </div>

            <Footer />

        </div>
    )
}


export default Home;