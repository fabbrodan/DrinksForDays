import React, {useState, useEffect} from 'react';
import {Container, Row, Col, InputGroup, FormControl, Form} from 'react-bootstrap'
import SearchResult from '../Components/SearchResult'

let Explore = () => {

    const [searchTerm, setTerm] = useState("");

    const Search = e => {
        e.preventDefault();
        setTerm(e.target["searchTerm"].value);
    }

    useEffect(() => {
        
    }, [searchTerm]);

    return(
        <Container>
            <Row>
                <Col>
                <Form onSubmit={Search}>
                    <InputGroup>
                        <FormControl name="searchTerm" placeholder="Search for a drink!" type="text"/>
                        <InputGroup.Append>
                            <input variant="btn btn-secondary" type="submit" value="Search!"/>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchResult searchString={searchTerm}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Explore;