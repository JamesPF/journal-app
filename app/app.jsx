var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var setAuthorizationToken = require('setAuthorizationToken');
var Main = require('Main');
import SignupPage from 'SignupPage';
import LoginPage from 'LoginPage';
var JournalsPage = require('JournalsPage');
var EntriesPage = require('EntriesPage');
var AboutPage = require('AboutPage');

require('bootstrap/dist/js/bootstrap.js');
require('style!css!bootstrap/dist/css/bootstrap.css');
require('style!css!sass!applicationStyles');

setAuthorizationToken(localStorage['x-auth']);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="signup" component={SignupPage} />
      <Route path="about" component={AboutPage} />
      <Route path="journals" component={JournalsPage} />
      <Route path="entries" component={EntriesPage} />
      <IndexRoute component={LoginPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
