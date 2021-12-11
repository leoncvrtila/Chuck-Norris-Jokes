import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        
        <div className="Nav">

            <nav>

                <NavLink to='/'>All Jokes</NavLink>

                <NavLink to='/favorites'>Favorites</NavLink>

            </nav>

        </div>

    )

}

export default Nav;