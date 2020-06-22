import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'

let Explore = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <InputGroup>
                        <FormControl placeholder="Search for a drink!"/>
                        <InputGroup.Append>
                            <Button variant="secondary">Button!</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Explore;