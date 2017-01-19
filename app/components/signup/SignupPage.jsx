import React, {Component} from 'react';
var axios = require('axios');
var {Link, hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');
var setAuthorizationToken = require('setAuthorizationToken');

import SignupForm from 'SignupForm';

class SignupPage extends Component {
  constructor (props) {
    super(props);
    this.handleUserSignup = this.handleUserSignup.bind(this);
  }
  componentWillMount () {
    if (axios.defaults.headers.common['x-auth']) {
      hashHistory.push('/journals');
    }
  }
  handleUserSignup (newUser) {

    axios.post('/users', newUser).then((res) => {
      var token = res.headers['x-auth'];
      localStorage.setItem('x-auth', token);
      setAuthorizationToken(token);
      hashHistory.push('/journals');
    });
  }
  render () {
    return (
      <div className="auth-form">
        <SignupForm onUserSignup={this.handleUserSignup}/>
        <p className="text-center">Already have an account? <Link to="/">Log in!</Link></p>
      </div>
    );
  }
}

export default SignupPage;
