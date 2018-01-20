const validate = (password) => {
  validateLength(password);
  validateCapitalLetter(password);
  validateLowercase(password);
  validateNumber(password);
  validateUnderscore(password);
}

const validateLength = (password) => {
  if(password.length <= 8) {
    throw Error('Should have more than 8 characters')
  }
}

const validateCapitalLetter = (password) => {
  if(!/[A-Z]/.test(password)) {
    throw Error('Should contain a capital letter')
  }
}

const validateLowercase = (password) => {
  if(!/[a-z]/.test(password)) {
    throw Error('Should contain a lowercase')
  }
}

const validateNumber = (password) => {
  if(!/\d/.test(password)) {
    throw Error('Should contain a number')
  }
}

const validateUnderscore = (password) => {
  if(!password.includes('_')) {
    throw Error('Should contain an underscore')
  }
}

module.exports = {
  validate
};