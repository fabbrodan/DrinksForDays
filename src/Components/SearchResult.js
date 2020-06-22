import drinks from '../Data/drinks.json';
import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



const SearchResult = ({searchString}) => {


    const [results, setResults] = useState([])

    useEffect(() => {
        setResults(
            searchString === "" ? [] : drinks["cocktails"].filter(c => c.name.toLowerCase().includes(searchString.toLowerCase()))
        )
    }, [searchString])

    return(
        <Container>
            <Row>
            {
                results.map(r => (
                    <Col>
                        <Row>
                            <Col>
                                <p>Name: <a href="/abc">{r.name}</a></p>
                            </Col>
                        </Row>
                        <Row>
                            <img src={r.image} alt={r.name}/>
                        </Row>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

export default SearchResult;