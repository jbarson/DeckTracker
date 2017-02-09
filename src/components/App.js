import React from 'react';
import './App.css';
import base from '../base';
import {browserHistory} from 'react-router';
import PageHeader from './PageHeader';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      role: null
    }
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('deckTrackerUser')) || '';
    let role = localStorage.getItem('deckTrackerRole') || '';
    if (user) {
      this.setState({user, role})
    }
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, {user});
      }
    });
  }
  authenticate = () => {
    base.authWithOAuthPopup('google', this.authHandler);
  }
  logOut = () => {
    base.unauth();
    //console.log(this.state)
    this.setState({user: null, role: null});
    localStorage.removeItem('deckTrackerUser');
    localStorage.removeItem('deckTrackerRole');
    console.log('logged out');
    browserHistory.push('/');
  }
  handleLogin = (user) => {
    user
      ? this.logOut()
      : this.authenticate();
  }
  authHandler = (err, authData) => {
    console.log(authData)
    if (err) {
      console.warn(err);
      return;
    }
    base
      .fetch(`accounts/${authData.user.uid}`, {context: this})
      .then(data => {
        console.info(data);
        if (!data) {
          this.createAccountOnFirebase(authData)
        }
        this.setState({user: authData.user, role: data.role});
        localStorage.setItem('deckTrackerUser', JSON.stringify(authData.user));
        localStorage.setItem('deckTrackerRole', data.role);
      })
      .then(() => {
        this.state.role === 'player'
          ? browserHistory.push('/play')
          : browserHistory.push('/create');
      })
      .catch(error => {
        console.warn(error);
      })

  }
  createAccountOnFirebase(authData) {
    base.post(`accounts/${authData.user.uid}`, {
      context: this,
      data: {
        name: authData.user.displayName,
        role: 'player'
      }
    })

  }
  render() {
    return (
      <div className="container">
        <PageHeader user={this.state.user} handleLogin={this.handleLogin}/> {this.state.role === "admin"
          ? <Navbar/>
          : ''}
        {this.props.children && React.cloneElement(this.props.children, {})}
      </div>
    );
  }
}

export default App;
