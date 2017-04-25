import React, {Component} from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();

    var {onUserLogin} = this.props;
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    var user = {
      email,
      password
    };

    onUserLogin(user);
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Log In</h1>
        <form className="col-xs-10 col-sm-6 col-md-4 login-form" onSubmit={this.onFormSubmit}>
          <input className="form-control" type="email" ref="email" placeholder="Email" />
          <br/>
          <input className="form-control" type="password" ref="password" placeholder="Password" />
          <br/>
          <button id="login-signup-submit" className="btn btn-success form-control" type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
