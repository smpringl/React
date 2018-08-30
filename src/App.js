import React, { Component } from 'react';
import './styles/index.css';
import './App.css';
import Navybar from './Navybar/Navybar';
import Leftpanel from './LeftPanel/Leftpanel';
import Maintable from './MainTable/Maintable';
import Filter from './Filter/Filter';
import Statframe from './Statframe/Statframe';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  render() {

   return (
      <div>
      <Navybar />
      <Filter />
      <Container fluid className="mt-3">
        <Row>
          <Col md="12">
          	<Maintable />
          </Col>
        </Row>
        <Row className="pt-4">
	    	<Col md="3">
	    	</Col>
	    	<Col md="6">
	    		<Statframe />
	    	</Col>
	    	<Col md="3">
	    	</Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
