import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../Styles/Homepage.css';

let Homepage = () => {
    return(
        <Container fluid className="fullPage">
            <Row class="pt-15">
                <Col>
                    <h1>Welcome to explore the world of drinks and cocktails!</h1>
                </Col>
            </Row>
            <Container id="HomePageContent">
            </Container>
        </Container>
    )
}

export default Homepage;