/*
Navigation bar on the top of the page that asks you to upload a resume and there's a button to upload
*/

import React from 'react'
import {Link} from "react-router";

const Navbar: () => React.JSX.Element = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">Resumind</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar

