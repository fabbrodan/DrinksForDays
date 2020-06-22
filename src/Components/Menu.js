import React from 'react';
import {NavLink} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import '../Styles/Menu.css';

let Menu = () => {
    return(
        <Row id="nav-menu">
            <NavLink exact activeClassName="menuActive" to="/">Home</NavLink>
            <NavLink exact activeClassName="menuActive" to="/Explore">Explore</NavLink>
        </Row>
    )
}

export default Menu;