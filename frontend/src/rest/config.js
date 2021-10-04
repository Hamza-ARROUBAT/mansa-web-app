// mock server
const BASE_URL = 'http://localhost:5000';

// Routers
const USERS_ROUTER = BASE_URL + '/users';
const CONTRIBUTIONS_ROUTER = BASE_URL + '/contributions';

// Controllers
// ATHENTICATION_CONTROLLER
export const POST_AUTH_USER = {
  url: USERS_ROUTER + '/auth',
  type: 'POST',
};

// CONTRIBUTIONS_CONTROLLER
export const GET_ALL_CONTRIBUTIONS = {
  url: CONTRIBUTIONS_ROUTER + '/all',
  type: 'GET',
};
export const POST_CONTRIBUTION = {
  url: CONTRIBUTIONS_ROUTER,
  type: 'POST',
};
export const DELETE_CONTRIBUTION = {
  url: CONTRIBUTIONS_ROUTER,
  type: 'DELETE',
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
