
import React, { Component } from 'react';
import './Leftpanel.css';
import { Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

class leftpanel extends Component {
  
  render() {
    
    return (
      <div className="panel text-center text-uppercase">
      	<Nav vertical pills>
          <NavItem className="mb-2">
            <NavLink active href="#">Tracker</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Following</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default leftpanel;