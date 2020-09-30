// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';

// TODO: add and export your own actions
export function setCars() {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/garage-test/cars`)
    .then((response) => response.json());
  return {
    type: FETCH_CARS,
    payload: promise,
  };
}

export function setCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then((response) => response.json());
  return {
    type: FETCH_CAR,
    payload: promise,
  };
}

export function createCar(body, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/garage-test/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then((response) => response.json())
    .then(callback);
  return {
    type: CAR_CREATED,
    payload: request,
  };
}

export function deleteCar(id, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .then(callback);
  return {
    type: CAR_DELETED,
    payload: request,
  };
}
