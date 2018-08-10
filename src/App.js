import React, { Component } from 'react';
import './styles/index.css';
import './App.css';
import Person from './Person/Person';
import Navybar from './Navybar/Navybar';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

library.add(faStroopwafel)

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Manu', age: 29},
			{ name: 'Stephanie', age: 26}
		],
		otherState: 'some other value',
		otherpersons: [
			{ name: 'imnuevo'},
			{ name: 'Manu'}
		],
		showPersons: false
	}

	nameChangedHandler = (event) => {
		this.setState({
		persons: [
			{ name: 'Max', age: 28},
			{ name: event.target.value, age: 29},
			{ name: 'Stephanie', age: 26}
		 ]
		})
	}

	personAlteredHandler = (event) => {
		this.setState({
		otherpersons: [
			{ name: event.target.value},
			{ name: 'Trey'},
			{ name: 'Stephanie'}
		 ]
		})
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});	
	}

	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons;
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

  render() {
	
	//EXAMPLE OF INLINE STYLING
  	const style = {
		backgroundColor: 'blue',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer'
  	};

  	let persons = null;

  	if (this.state.showPersons) {
		persons = (
			<div>
			    {this.state.persons.map((person, index) => {
			    	return <Person 
			    		click={() => this.deletePersonHandler(index)}
			    		name={person.name} 
			    		age={person.age} />
			    })}
			</div>
		);
  	}

   //  return (
   //    <div className="App">
   //      <h1>Hi, I'm a React App</h1>
   //      <p>This is really working!</p>
   //      <Alert color="primary">
   //      This is a primary alert — check it out!
   //    </Alert>
   //      <Button color="primary">Danger!</Button>
   //      Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
   //      <button 
   //      	style={style}
   //      	onClick={this.togglePersonHandler}>Toggle Persons</button>
   //      {persons}
   //      <UserInput 
			// name={this.state.otherpersons[0].name}
   //      	changed={this.personAlteredHandler}/>
   //      <UserOutput 
   //      	name={this.state.otherpersons[0].name}/>
   //    </div>
   //  );
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
          	<Table striped size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
