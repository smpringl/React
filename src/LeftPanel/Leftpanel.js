
import React, { Component } from 'react';
import './Leftpanel.css';
import { Button } from 'reactstrap';

class leftpanel extends Component {
  
  render() {
    
    return (
      <div>
      	<Button color="primary" className="mb-1">Tracker</Button>{' '}
        <Button color="primary">Follow</Button>{' '}
      </div>
    );
  }
}

export default leftpanel;