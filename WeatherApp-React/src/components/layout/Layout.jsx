import React from "react";
import './Layout.css'
import { Link, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../molecules/TopBar.jsx";

const Layout = () => {
    return (
        <>
            {/*<nav className="navbar">*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Weather</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/about">About</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <ResponsiveAppBar />
            <Outlet className="outlet"/>
        </>
    );
}

export default Layout;