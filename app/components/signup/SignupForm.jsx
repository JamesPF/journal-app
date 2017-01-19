import React, {Component} from 'react';

class SignupForm extends Component {
  constructor (props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit (e) {
    e.preventDefault();

    var {onUserSignup} = this.props;
    var name = this.refs.name.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    var user = {
      name,
      email,
      password
    };

    onUserSignup(user);
  }
  render () {
    return (
      <div>
        <h1 className="text-center">Sign Up</h1>
        <form className="col-xs-10 col-sm-6 col-md-4 signup-form" onSubmit={this.onFormSubmit}>
          <input className="form-control" type="text" ref="name" placeholder="Enter a Name" />
          <br/>
          <input className="form-control" type="email" ref="email" placeholder="Enter an Email" />
          <br/>
          <input className="form-control" type="password" ref="password" placeholder="Enter a Password (six characters minimum)" />
          <br/>
          <button className="btn btn-success form-control" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
