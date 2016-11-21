var React = require('react');

var SignupPage = React.createClass({
  onFormSubmit: function () {
    // Get onUserSignup prop

    var name = this.refs.name.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    var user = {
      name,
      email,
      password
    };

    // Also perform validation for name, email, and password formatting
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.password.value = '';
      // Call onUserSignup()
    }
  },
  render: function () {
    return (
      <div className="auth-form">
        <h1 className="text-center">Sign Up</h1>
        <form className="col-xs-8 col-sm-4 signup-form" onSubmit={this.onFormSubmit}>
          <input className="form-control" type="text" ref="name" placeholder="Enter Name" />
          <br/>
          <input className="form-control" type="email" ref="email" placeholder="Enter Email" />
          <br/>
          <input className="form-control" type="password" ref="password" placeholder="Enter a Password" />
          <br/>
          <button className="btn btn-success form-control" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
});

module.exports = SignupPage;
