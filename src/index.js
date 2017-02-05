import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Dash from './components/Dash';
import Create from './components/Create';
import Run from './components/Run';
import Play from './components/Play'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dash} />
        <Route path="/create" component={Create} />
        <Route path="/run" component={Run} />
        <Route path="/play" component={Play} />
      </Route>
    </Router>
  )
}

ReactDOM.render(
  <Root/>, document.getElementById('root'));
