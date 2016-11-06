var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var JournalsPage = require('JournalsPage');
var EntriesPage = require('EntriesPage');
var AboutPage = require('AboutPage');

require('bootstrap/dist/js/bootstrap.js');
require('style!css!bootstrap/dist/css/bootstrap.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={AboutPage} />
      <Route path="entries" component={EntriesPage} />
      <IndexRoute component={JournalsPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
