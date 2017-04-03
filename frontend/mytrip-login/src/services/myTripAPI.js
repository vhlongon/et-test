import { Left, Right } from '../../utils/generalUtils';

const defaultConfig = {
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
};

const successfulResponse = response =>
  (response.status >= 200 && response.status < 300);

const eitherSuccessOrFail = response =>
  successfulResponse(response)
    ? Right(response)
    : Left(response);

const handleError = response => {
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
};

const checkStatus = response =>
  eitherSuccessOrFail(response)
    .fold(
      () => handleError(response),
      () => response
    );

const parseJSON = response =>
  response.json();

export const login = (email, bookingNumber) =>
  fetch('/login',
    Object.assign({}, defaultConfig, {
      method: 'POST',
      body: JSON.stringify({ email, bookingNumber }),
    })
  ).then(checkStatus)
   .then(parseJSON);

// just copy the login functionality to mock a signup end point
export const signup = (email, bookingNumber) =>
fetch('/signup',
  Object.assign({}, defaultConfig, {
    method: 'POST',
    body: JSON.stringify({ email, bookingNumber }),
  })
).then(checkStatus)
.then(parseJSON);