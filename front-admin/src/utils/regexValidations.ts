class RegexValidations {
  static validateEmail (email: string) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    return email && emailRegex.test(email);
  }

  static validatePassword (password: string) {
    return password.length > 6;
  }
}

export default RegexValidations;
