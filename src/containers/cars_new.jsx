/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    const { createCar, history } = this.props;
    createCar(values, (post) => {
      history.push('/'); // Navigate after submit
      return post;
    });
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
      <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <div>
          <input
            id={input.name}
            className="form-control"
            type={type}
            {...input}
          />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }

  required = (value) => (value ? undefined : 'Required');

  plate = (value) => (
    value && /^[A-Z0-9]+$/.test(value) ? undefined : 'Should be all caps and no special characters'
  )

  render = () => {
    const { handleSubmit, invalid } = this.props;
    console.log(invalid);
    return (
      <div className="app">
        <div className="garage">
          <img className="logo" src="../assets/images/logo.svg" alt="mechanic" />
          <p>Garage description</p>
          <Link to="/">
            Back to list
          </Link>
        </div>
        <div className="container-form">
          <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                label="Brand"
                name="brand"
                type="text"
                component={this.renderField}
                validate={[this.required]}
              />
              <Field
                label="Model"
                name="model"
                type="text"
                component={this.renderField}
                validate={[this.required]}
              />
              <Field
                label="Owner"
                name="owner"
                type="text"
                component={this.renderField}
                validate={[this.required]}
              />
              <Field
                label="Plate"
                name="plate"
                type="text"
                component={this.renderField}
                validate={[this.required, this.plate]}
              />
              <button
                className="red-btn"
                type="submit"
                disabled={invalid}
              >
                Add Car
              </button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(null, { createCar })(CarsNew));
