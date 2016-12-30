var axios = require('axios');

var setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth'];
  }
};

module.exports = setAuthorizationToken;
