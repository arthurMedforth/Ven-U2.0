import { NavLink as Link } from 'react-router-dom';
import React from 'react';
import '../Styles/nav.css'

const NavBtn = (props) => {
    return (
        <div className='nav-btn'>
            <Link to={"/"+props.link}>{props.name}</Link>    
        </div>
    )
}

export default NavBtn;