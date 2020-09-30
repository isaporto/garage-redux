// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';

// TODO: add and export your own actions
export function setCars() {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/garage-test/cars`)
    .then(response => response.json())
  return {
    type: FETCH_CARS,
    payload: promise,
  };
}

