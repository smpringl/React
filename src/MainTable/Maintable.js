
import React, { Component } from 'react';
import './Maintable.css';
import { Table } from 'reactstrap';

class maintable extends Component {
  
  render() {
    
    return (
      <div>
        <Table striped size="sm" className="Main-Table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Venue</th>
              <th>Location</th>
              <th>Tickets Left</th>
              <th>Days to Show</th>
              <th>Days On Sale</th>
              <th>Avg Price</th>
              <th>Secondary Tickets</th>
              <th>Links</th>
              <th>Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Dermot Kennedy</td>
              <td>Brooklyn Steel</td>
              <td>New York, NY</td>
              <td>76 (-12)</td>
              <td>37</td>
              <td>15</td>
              <td>$64</td>
              <td>119</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Billie Eilish</td>
              <td>Union Transfer</td>
              <td>Philadelphia, PA</td>
              <td>23 (-77)</td>
              <td>124</td>
              <td>2</td>
              <td>$84</td>
              <td>367</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Alina Baraz</td>
              <td>Variety Playhouse</td>
              <td>Atlanta, GA</td>
              <td>235 (-8)</td>
              <td>56</td>
              <td>41</td>
              <td>$47</td>
              <td>44</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default maintable;