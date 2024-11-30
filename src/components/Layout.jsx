import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const Layout = () => {
    return (
        <div>
            <NavBar>s</NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;