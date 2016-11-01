var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var EditorPage = require('EditorPage');
var AboutPage = require('AboutPage');

require('style!css!bootstrap/dist/css/bootstrap.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={AboutPage} />
      <IndexRoute component={EditorPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
