const validateUser = {
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  isValidPassword: (password) => {
    return password.length >= 6;
  },
};

module.exports = validateUser;
