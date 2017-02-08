import React from 'react';
import {Link} from 'react-router';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <h1>
        <Link to="/" className="text-muted ">Deck Tracker</Link>
      </h1>
      <button 
        className="btn" 
        onClick={props.handleLogin}>
        {props.user
          ? 'Log Out'
          : 'Log In'}
      </button>
    </div>
  );
};

export default PageHeader;

React.PropTypes={
  handleLogin: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
}