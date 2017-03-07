import React from 'react';
import './PageHeader.css';

const PageHeader = (props) => {
  const user = props.user
  return (
    <div className="page-header">

      <nav className="navbar navbar-default ">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Deck Tracker</a>
            <span className="navbar-text hidden-xs">Admin</span>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              {!props.user && <li>
                <a href="#" onClick={() => props.handleLogin(user)}>Log In</a>
              </li>}
              {props.user &&<li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">{user && user.displayName}
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" onClick={() => props.handleLogin(user)}>Log Out</a>
                  </li>
                </ul>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PageHeader;
