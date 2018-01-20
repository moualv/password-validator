const isValidPassword = require('./validator').isValidPassword;
const expect = require('chai').expect;

describe('password validator test cases', () => {
    it('Should detect as valid a valid password', () => {
        expect(isValidPassword('Aaaaaaaaaaa1_')).to.be.true;
    })
    it('Should  detect as invalid a password with less of seven characters', () => {
        expect(isValidPassword('Aaaaaa1_')).to.be.false;
    });
    it('Should detect as invalid a password with no capital letters', () => {
        expect(isValidPassword('aaaaaaa1_')).to.be.false;
    });
    it('Should detect as invalid a password with no lower cases', () => {
        expect(isValidPassword('AAAAAAA1_')).to.be.false;
    });
    it('Should detect as invalid a password with no numbers', () => {
        expect(isValidPassword('Aaaaaaaa_')).to.be.false;
    });
    it('Should detect as invalid a password with no underscore', () => {
        expect(isValidPassword('Aaaaaaa11')).to.be.false;
    });
});