var React = require('react');

var LoginForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var {onUserLogin} = this.props;
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    var user = {
      email,
      password
    };

    onUserLogin(user);
  },
  render: function () {
    return (
      <div>
        <h1 className="text-center">Log In</h1>
        <form className="col-xs-10 col-sm-6 col-md-4 login-form" onSubmit={this.onFormSubmit}>
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

module.exports = LoginForm;
