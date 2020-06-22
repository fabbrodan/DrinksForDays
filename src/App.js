import React from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Explore from './Pages/Explore';
import Header from './Components/Header'
import Menu from './Components/Menu'

const App = () => {
  return (
    <Container className="App">
        <BrowserRouter>
        <Header/>
        <Menu/>
          <Container className="PageContent">
            <Switch>
              <Route path='/' component={Homepage} exact={true}/>
              <Route path='/Explore' component={Explore} />
            </Switch>
          </Container>
        </BrowserRouter>
    </Container>
  );
}

export default App;
