import React, {Component} from 'react';
var axios = require('axios');
var {Link, hashHistory} = require('react-router');

import SignupForm from 'SignupForm';

class SignupPage extends Component {
  constructor (props) {
    super(props);
    this.handleUserSignup = this.handleUserSignup.bind(this);
  }
  handleUserSignup (newUser) {

    axios.post('/users', newUser).then((res) => {
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
