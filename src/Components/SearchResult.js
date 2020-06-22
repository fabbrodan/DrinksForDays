import drinks from '../Data/drinks.json';
import React, {useState, useEffect} from 'react';
import { Row, Col} from 'react-bootstrap';
import Drink from './Drink';
import '../Styles/SearchResult.css';



const SearchResult = ({searchString}) => {


    const [results, setResults] = useState([])
    const [selectedDrink, setDrink] = useState(null);

    const updateDrink = (drink) => {
       setResults([]);
       setDrink(drink);
    }

    useEffect(() => {
        setResults(
            searchString === "" ? [] : drinks["cocktails"].filter(c => c.name.toLowerCase().includes(searchString.toLowerCase()))
        )
        setDrink(null);
    }, [searchString])

    return(
        <Row className="resultRow">
            {
                selectedDrink !== null ? <Drink drink={selectedDrink}/> :
                (results.length > 0 || searchString === "") ? 
                    results.map(r => (
                        <Col className="drinkcell" lg={4} md={6} sm={12} onClick={() => updateDrink(r)}>
                            <Row>
                                <Col>
                                    <p className="selectable drinkLabel">{r.name}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img className="selectable" src={r.image} alt={r.name}/>
                                </Col>
                            </Row>
                        </Col>))
                    :
                    <Col>
                        <h3>No results</h3>
                    </Col>
            }
            </Row>
    )
}

export default SearchResult;