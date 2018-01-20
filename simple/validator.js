const isValidPassword = (password) => {
    return hasEnoughSize(password) 
        && hasCapitalLetter(password) 
        && hasLowerCase(password)
        && hasNumbers(password)
        && hasUnderscore(password)
};

const hasEnoughSize = (password) => {
    return password.length > 8;
};

const hasCapitalLetter = (password) => {
    return /[A-Z]/.test(password);
};

const hasLowerCase = (password) => {
    return /[a-z]/.test(password);
}

const hasNumbers = (password) => {
    return /\d/.test(password);
}

const hasUnderscore = (password) => {
    return password.includes('_');
}
module.exports = {
    isValidPassword
};