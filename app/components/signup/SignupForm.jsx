var React = require('react');

var SignupForm = React.createClass({
  onFormSubmit: function (e) {
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
  },
  render: function () {
    return (
      <div>
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

module.exports = SignupForm;
