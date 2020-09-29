import React from 'react';

import CarsList from '../containers/cars_list';
import Garage from './garage';

const App = () => {
  return (
    <div className="app">
      <Garage />
      <CarsList />
    </div>
  );
};

export default App;
