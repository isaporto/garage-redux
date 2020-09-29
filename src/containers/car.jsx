import React, { Component } from 'react';

class Car extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="card-product">
        <img src="assets/images/logo_square.svg" alt="logo le wagon square" />
        <div className="card-product-infos">
          <h2>Car type</h2>
          <p><strong>Owner:</strong> ownername</p>
        </div>
      </div>
    );
  }
}

export default Car;
