var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var EditorPage = require('EditorPage');
var About = require('About');

require('style!css!bootstrap/dist/css/bootstrap.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={EditorPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
