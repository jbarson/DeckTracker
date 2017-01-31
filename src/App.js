import React from 'react';
import './App.css';
import {
  Nav,
  NavItem,
  PageHeader,
  Navbar
} from 'react-bootstrap';

class App extends React.Component {
  greeting = "hi there";
  render() {
    return (
      <div className="container">
        <PageHeader className="text-muted ">Deck Tracker</PageHeader>
        <Navbar>
          <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
            <NavItem eventKey="1" >NavItem 1 content</NavItem>
            <NavItem eventKey="2" >NavItem 2 content</NavItem>
          </Nav>
          <Nav pullRight bsStyle="tabs">
            <NavItem eventKey="3">Login</NavItem>
          </Nav>
        </Navbar>
        <div className="content">
          {this.greeting}
        </div>
      </div>
    );
  }
}

export default App;
