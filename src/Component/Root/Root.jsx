import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="w-[90%] m-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;