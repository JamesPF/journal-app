import React, {Component} from 'react';

class AboutPage extends Component {
  render () {
    return (
      <div id="about-page">
        <h1 className="text-center">About</h1>
        <h3 className="text-center">Currently working on...</h3>
        <p className="text-center">Here's what I'm currently working on in order to make this application better.</p>
          <ul className="updates-list">
            <li>Converting the application to use Redux</li>
            <li>Displaying entries by most recently updated</li>
            <li>Functionality for deleting entries</li>
            <li>Functionality for deleting journals</li>
            <li>Testing for both front and back end</li>
            <li>Overall styling of the whole application</li>
          </ul>

        <h3 className="text-center">This application is built with:</h3>
        <p className="text-center">React JS, Node.js, Express, MongoDB, Bootstrap, and SCSS</p>
      </div>
    );
  }
}

export default AboutPage;
