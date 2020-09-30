/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { setCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    const { setCars } = this.props;
    setCars();
  }

  render = () => {
    const { cars } = this.props;
    if (!cars) {
      return <p>Loading...</p>;
    }
    return (
      <div className="app">
        <div className="garage">
          <img className="logo" src="../assets/images/logo.svg" alt="mechanic" />
          <h2>Garage Name</h2>
          <p>Garage description</p>
          <Link to="/cars/new">
            Add a car
          </Link>
        </div>
        <div>
          {cars.map((car) => {
            return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <div className="card-product">
                  <img src="assets/images/logo_square.svg" alt="logo le wagon square" />
                  <div className="card-product-infos">
                    <h2>{car.brand} - {car.model}</h2>
                    <p><strong>Owner:</strong> {car.owner}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCars }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
