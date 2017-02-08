import React from 'react';
import './App.css';
import {Link} from 'react-router';
import base from '../base'
import PageHeader from './PageHeader';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      role: null,
      accounts: []
    }
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('deckTrackerUser')) || '';
    let role = localStorage.getItem('deckTrackerRole') || '';
    if (user) {
      this.setState({user, role})
    }
  }
  authenticate() {
    base.authWithOAuthPopup('google', this.authHandler);
  }
  logOut() {
    base.unauth();
    this.setState({user: null, role: null});
    localStorage.setItem('deckTrackerUser', null);
    localStorage.setItem('deckTrackerRole', null);
    console.log('logged out');
  }
  handleLogin() {
    this.state.user
      ? this.logOut()
      : this.authenticate();
  }
  authHandler =(err, authData)=> {
    if (err) {
      console.warn(err);
      return;
    }
    
    base
      .fetch(authData.user.uid, {context: this})
      .then(data => {
        console.info(data);
        // base.push(`${authData.user.uid}/login`, {
        //   data: `${authData
        //     .user
        //     .displayName} logged in at ${Date
        //     .now()}`
        // })
        this.setState({user: authData.user, role: data.role});
        localStorage.setItem('deckTrackerUser', JSON.stringify(authData.user));
        localStorage.setItem('deckTrackerRole', data.role);
      })
      .catch(error => {
        console.warn(error);
      })

  }

  render() {
    return (
      <div className="container">
        <PageHeader 
          handleLogin={this.handleLogin}
          user={this.state.user}/>
        {this.state.role==="admin"?<Navbar />:''}
        {this.props.children}

      </div>
    );
  }
}

export default App;
