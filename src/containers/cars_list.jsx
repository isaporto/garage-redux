import React, { Component } from 'react';

import Car from './car';

class CarsList extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="cars-list">
        <Car />
      </div>
    );
  }
}

export default CarsList;
