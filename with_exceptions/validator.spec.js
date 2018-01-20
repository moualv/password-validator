let expect = require('chai').expect;
let validate = require('./validator').validate;

const testValidateThrowsError = (password, regexError) => {
  expect(() => validate(password)).to.throw(regexError);
}

describe('Password validator', function() {
  it('Should throw an error for a password with less of seven characters', function() {
    testValidateThrowsError('Aa1_Aa1_', /Should have more than 8 characters/);
  });
  it('Should throw an error for a password without a capital letter', function() {
    testValidateThrowsError('1234567a_', /Should contain a capital letter/);
  });
  it('Should throw an error for a password without a lowercase', () => {
    testValidateThrowsError('AAAAAAAAA1_', /Should contain a lowercase/);
  });
  it('Should throw an error for a password without a number', () => {
    testValidateThrowsError('AAAaaaa_____', /Should contain a number/);
  });
  it('Should throw an error for a password without an underscore', () => {
    testValidateThrowsError('AAAaaaa33', /Should contain an underscore/);
  });
  it('Should validate successfully a valid password', () => {
    expect(() => validate('Aa1_Aa1_A')).to.not.throw();
  })
});
