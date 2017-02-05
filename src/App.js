import React from 'react';
import './App.css';
import {
  PageHeader
} from 'react-bootstrap';
import {Link} from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      role:null,
      accounts: ["Fred", "Joe", "Lisa"],
      data: 123
    }
  }
  handleSelect = () => {}
  render() {
    return (
      <div className="container">
        <PageHeader className="text-muted ">Deck Tracker</PageHeader>
        <button className="btn pull-right" onClick={() => this.handleLogin()}>{this.state.user
          ? 'Log Out'
          : 'Log In'}
        </button>
        <nav className="nav nav-tabs"  onSelect={this.handleSelect}>
          <li><Link to="/create">Create Game</Link></li>
          <li><Link to="/run">Run Game</Link></li>
          <li><Link to="/play">Play Game</Link></li>    
        </nav>
        {React.cloneElement(this.props.children, {data: this.state.data})}
        
      </div>
    );
  }
}

export default App;
