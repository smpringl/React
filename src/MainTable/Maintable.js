
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
              <th>Days On Sale</th>
              <th>Days to Show</th>
              <th>Avg List Price</th>
              <th>Secondary Tickets</th>
              <th>Links</th>
              <th>Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img className="openlink" src="https://s3-us-west-2.amazonaws.com/sovi-image-assets/share-1.png"/></th>
              <td>Dermot Kennedy</td>
              <td>Brooklyn Steel</td>
              <td>New York, NY</td>
              <td className="green">76</td>
              <td>37</td>
              <td>15</td>
              <td>$64</td>
              <td>119</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row"><img className="openlink" src="https://s3-us-west-2.amazonaws.com/sovi-image-assets/share-1.png"/></th>
              <td>Billie Eilish</td>
              <td>Union Transfer</td>
              <td>Philadelphia, PA</td>
              <td className="green">23</td>
              <td>124</td>
              <td>2</td>
              <td>$84</td>
              <td>367</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row"><img className="openlink" src="https://s3-us-west-2.amazonaws.com/sovi-image-assets/share-1.png"/></th>
              <td>Alina Baraz</td>
              <td>Variety Playhouse</td>
              <td>Atlanta, GA</td>
              <td className="green">235</td>
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