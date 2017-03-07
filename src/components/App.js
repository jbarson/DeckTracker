import React from 'react';
import './App.css';
import base from '../base';
import {browserHistory} from 'react-router';
import PageHeader from './PageHeader';
import Create from './Create';
//import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      //role: null
    }
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('deckTrackerUser')) || '';
    if (user) {
      this.setState({user})
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
    this.setState({user: null});
    localStorage.removeItem('deckTrackerUser');
    browserHistory.push('/');
  }
  handleLogin = (user) => {
    user
      ? this.logOut()
      : this.authenticate();
  }
  authHandler = (err, authData) => {
    if (err) {
      console.warn(err);
      return;
    }
    base
      .fetch(`accounts/${authData.user.uid}`, {context: this})
      .then(data => {
        this.setState({user: authData.user, role: data.role});
        localStorage.setItem('deckTrackerUser', JSON.stringify(authData.user));
      })
      .catch(error => {
        console.log(error);

      })

  }

  render() {
    return (
      <div className="container-fluid">
        <PageHeader user={this.state.user} handleLogin={this.handleLogin}/>
        
        <Create/>
      </div>
    );
  }
}

export default App;
