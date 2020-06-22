import '../Data/drinks.json';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'

const SearchEngine = ({searchString}) => {

    return(
        <Container>
            <h3>{searchString}</h3>
        </Container>
    )
}

export default SearchEngine;