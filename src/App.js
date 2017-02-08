import React from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      role: null,
      accounts: [
      ],
      data: 123
    }
  }
  handleSelect = () => {}
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>
            <Link to="/" className="text-muted ">Deck Tracker</Link>
          </h1>
          <button className="btn" onClick={() => this.handleLogin()}>{this.state.user
              ? 'Log Out'
              : 'Log In'}
          </button>
        </div>

        <nav className="nav nav-tabs" onSelect={this.handleSelect}>
          <li>
            <Link to="/create">Create Game</Link>
          </li>
          <li>
            <Link to="/run">Run Game</Link>
          </li>
          <li>
            <Link to="/play">Play Game</Link>
          </li>
        </nav>
        {this.props.children}

      </div>
    );
  }
}

export default App;
