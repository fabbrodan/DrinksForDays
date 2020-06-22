import React, {useState, useEffect} from 'react';
import {Container, Row, Col, InputGroup, FormControl, Form, Button} from 'react-bootstrap'
import SearchResult from '../Components/SearchResult'
import '../Styles/Explore.css';

let Explore = () => {

    const [searchTerm, setTerm] = useState("");

    const Search = e => {
        e.preventDefault();
        setTerm("");
        setTerm(e.target["searchTerm"].value);
    }

    const Clear = () => {
        setTerm("");
        document.getElementById("searchInput").value = "";
    }

    useEffect(() => {
    }, [searchTerm]);

    return(
        <Container>
            <Row id="searchBarRow">
                <Col lg={{ offset:2, span: 8}}>
                <Form onSubmit={Search}>
                    <InputGroup>
                        <FormControl id="searchInput" name="searchTerm" placeholder="Search for a drink!" type="text"/>
                        <InputGroup.Append>
                            <Button variant="secondary" type="submit">Search!</Button>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <Button size="sm" variant="outline-secondary" onClick={Clear}>Clear</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                </Col>
            </Row>
            <Row>
                <SearchResult searchString={searchTerm}/>
            </Row>
        </Container>
    )
}

export default Explore;