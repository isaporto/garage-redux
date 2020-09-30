/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { setCar, deleteCar } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    const { setCar, match, car } = this.props;
    if (!car) {
      setCar(match.params.id);
    }
  }

  handleClick = () => {
    const { deleteCar, match, history } = this.props;
    deleteCar(match.params.id, (post) => {
      history.push('/'); // Navigate after submit
      return post;
    });
  }

  render = () => {
    const { car } = this.props;
    const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />;
    if (!car) {
      return <p>Loading...</p>;
    }
    return (
      <div className="app">
        <div className="garage">
          <img className="logo" src="../assets/images/logo.svg" alt="mechanic" />
          <p>Garage description</p>
          <Link to="/">
            Back to list
          </Link>
        </div>
        <div className="card-product-show">
          <img src="../assets/images/logo_square.svg" alt="logo le wagon square" />
          <div className="card-product-infos">
            <h2>{car.brand} - {car.model}</h2>
            <p><strong>Owner:</strong> {car.owner}</p>
            <p className="plate">{car.plate.slice(0, 3)}-{car.plate.slice(3, 5)}-{car.plate.slice(5, 7)}</p>
          </div>
          <button type="button" className="red-btn" onClick={this.handleClick}>
            {trashIcon}
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCar, deleteCar }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find((car) => car.id === idFromUrl);
  return {
    car,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
