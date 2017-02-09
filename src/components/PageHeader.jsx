import React from 'react';
import {Link} from 'react-router';

const PageHeader = (props) => {
  const user = props.user
  const buttonText = user?'Log Out':'Log In'
  return (
    <div className="page-header">
      <h1>
        <Link to="/" className="text-muted ">Deck Tracker</Link>
      </h1>
      <button 
        className="btn" 
        onClick={()=>props.handleLogin(user)}>
        {buttonText}
      </button>
    </div>
  );
};

export default PageHeader;

