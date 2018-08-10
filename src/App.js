import React, { Component } from 'react';
import './styles/index.css';
import './App.css';
import Navybar from './Navybar/Navybar';
import Leftpanel from './LeftPanel/Leftpanel';
import Maintable from './MainTable/Maintable';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  render() {

   return (
      <div>
      <Navybar />
      <Container fluid>
        <Row>
          <Col xs="1">
          	<Leftpanel />
          </Col>
          <Col xs="11">
          	<Maintable />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
