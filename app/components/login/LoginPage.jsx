var React = require('react');

var LoginPage = React.createClass({
  onFormSubmit: function () {
    // Get onUserLogin prop

    var email = this.refs.email.value;
    var password = this.refs.password.value;

    // This block will likely contain more logic for login
    if (email.length > 0 && password.length > 0) {
      this.refs.email.value = '';
      this.refs.password.value = '';

      // Call onUserLogin()
    }
  },
  render: function () {
    return (
      <div className="auth-form">
        <h1 className="text-center">Log In</h1>
        <form className="col-xs-8 col-sm-4 login-form" onSubmit={this.onFormSubmit}>
          <input className="form-control" type="email" ref="email" placeholder="Email" />
          <br/>
          <input className="form-control" type="password" ref="password" placeholder="Password" />
          <br/>
          <button className="btn btn-success form-control" type="submit">Log In</button>
        </form>
      </div>
    );
  }
});

module.exports = LoginPage;
