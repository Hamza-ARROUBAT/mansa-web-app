// mock server
const BASE_URL = 'http://localhost:5000';

// Routers
const USERS_ROUTER = BASE_URL + '/users';

// Methods
// ATHENTICATION_CONTROLLER
export const POST_AUTH_USER = {
  url: USERS_ROUTER + '/auth',
  type: 'POST',
};

// Beneficiaries
// export const GET_BENEFICIARIES = {
//   url: BENEFICIARIES_CONTROLLER,
//   type: 'GET',
// };
// export const POST_BENEFICIARIES = {
//   url: BENEFICIARIES_CONTROLLER,
//   type: 'POST',
// };
// export const PUT_BENEFICIARIES = {
//   url: BENEFICIARIES_CONTROLLER,
//   type: 'PUT',
// };
// export const DELETE_BENEFICIARIES = {
//   url: BENEFICIARIES_CONTROLLER,
//   type: 'DELETE',
// };
