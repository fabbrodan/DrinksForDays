import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../Styles/Homepage.css';

let Homepage = () => {
    return(
        <Container fluid id="HomePageContent">
            <Row>
                <Col>
                    <h1>Homepage</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;