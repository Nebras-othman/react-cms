const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.role = !isEmpty(data.role) ? data.role : '';
  data.email = !isEmpty(data.email) ? data.email : '';


  if (Validator.isEmpty(data.role)) {
    errors.role = 'role field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};