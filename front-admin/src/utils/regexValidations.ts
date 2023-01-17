class RegexValidations {
  static validateEmail(email?: string) {
    if (!email) return 'Digite um email';

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) return 'Digite um email válido';

    return null;
  }

  static validatePassword(password?: string) {
    if (!password) return 'Digite uma senha';

    if (password.length < 6) return 'Senha muito curta';

    return null;
  }
}

export default RegexValidations;
