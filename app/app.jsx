var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var IndexPage = require('IndexPage');
var EditorPage = require('EditorPage');
var AboutPage = require('AboutPage');

require('style!css!bootstrap/dist/css/bootstrap.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={AboutPage} />
      <Route path="editor" component={EditorPage} />
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
