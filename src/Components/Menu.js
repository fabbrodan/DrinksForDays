import React from 'react';
import NavLink from 'react-router-dom/NavLink'
import Row from 'react-bootstrap/Row';
import '../Styles/Menu.css';

let Menu = () => {
    return(
        <Row>
            <NavLink exact activeClassName="menuActive" to="/">Home</NavLink>
            <NavLink exact activeClassName="menuActive" to="/Explore">Explore</NavLink>
        </Row>
    )
}

export default Menu;