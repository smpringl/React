import React, { Component } from 'react';
import './Filter.css';
import { Button, ButtonGroup } from 'reactstrap';

class filter extends Component {
  
  render() {
    
    return (
      <div className="filtercontainer text-center pt-3">
      	<ButtonGroup size="sm" className="mb-3 Filter-Button">
            <Button outline active color="dark">All Events</Button>
            <Button outline color="dark">Following</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default filter;