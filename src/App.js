import React, { Component } from 'react';
import './styles/index.css';
import './App.css';
import Person from './Person/Person';
import Navybar from './Navybar/Navybar';
import Maintable from './MainTable/Maintable';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  render() {

   return (
      <div>
      <Navybar />
      <Container>
        <Row>
          <Col xs="2">
          	<Button color="primary">primary</Button>{' '}
	        <Button color="secondary">secondary</Button>{' '}
	        <Button color="success">success</Button>{' '}
	        <Button color="info">info</Button>{' '}
	        <Button color="warning">warning</Button>{' '}
	        <Button color="danger">danger</Button>{' '}
	        <Button color="link">link</Button>
          </Col>
          <Col xs="10">
          	<Maintable />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
