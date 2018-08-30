import React, { Component } from 'react';
import './Statblock.css';
import { Button, ButtonGroup } from 'reactstrap';

class statblock extends Component {
  
  render() {
    
    return (
      <div className="sblock text-center pl-4 pr-4 pt-3 pb-2 m-1 border dark">
        <span className="bannerstat mr-1">-24</span><span className="percentchange"><b>7.0%</b></span>
        <p className="daychange">7 day change</p>
      </div>
    );
  }
}

export default statblock;