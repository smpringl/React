import React, { Component } from 'react';
import './Statframe.css';
import Statblock from '../Statblock/Statblock';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

class statframe extends Component {
  
  render() {
    
    return (
      <div className="globalstatframe mb-4">
        <div className="headerblock border-bottom dark p-2 pt-3">
          <Container fluid>
            <Row>
              <Col md="8">
                <h6 className="mb-1">Lord Huron</h6>
                <p className="smallheaderitem m-0">McMenamin's Crystall Ballroom, Portland, OR</p>
                <p className="smallheaderitem">Saturday 8/8 at 9:00pm</p>
              </Col>
              <Col md="4" className="text-right pt-2">
                <Button outline color="dark" className="mr-1" size="sm">Follow</Button>{' '}
                <Button color="info" size="sm">Get Tickets</Button>{' '}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="p-3">
          <Container fluid className="border dark">
            <Row>
              <Col md="12" className="graybanner pt-2 pl-3 border-bottom dark">
                <p><b>Tickets Left History</b></p>
              </Col>
            </Row>
            <Row className="pt-2 pb-2">
              <Col md="4">
                <Statblock />
              </Col>
              <Col md="4">
                <Statblock />
              </Col>
              <Col md="4">
                <Statblock />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <img src="https://s3-us-west-2.amazonaws.com/sovi-image-assets/graph-ss.png" width="100%"/>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="headerblock border-top dark p-2 pt-3">
          <Container fluid>
            <Row>
              <Col md="12" className="text-right pb-2">
                <Button color="danger" size="sm">Close</Button>{' '}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default statframe;