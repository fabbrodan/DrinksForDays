import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../Styles/Drink.css';

let Drink = ({drink}) => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        var ingredientList = drink.preparation.split(new RegExp('[/(][0-9][0-9][/)]', 'g'));
        ingredientList.splice(ingredientList.indexOf(""), 1);
        var ingredientAmounts = drink.preparation.match(new RegExp('[/(][0-9][0-9][/)]', 'g'));

        ingredientList.map((value, index) => (
            ingredientList[index] = value + ingredientAmounts[index]
        ));

        setIngredients(ingredientList);
    }, [drink])


    return (
        <Col>
            <Row>
                <h3>{drink.name}</h3>
            </Row>
            <Row>
            <Col lg={4}>
                {
                    ingredients.map(v => (
                        <Row>
                        <p>{v}</p>
                        </Row>
                    ))
                }
            </Col>
            <Col lg={8}>
                <img src={drink.image} alt={drink.name}/>
            </Col>
            </Row>
        </Col>
    )
}

export default Drink;