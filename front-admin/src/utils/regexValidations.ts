class RegexValidations {
  static validateEmail(email?: string) {

    if (!email) return 'Digite um email';

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]+)\])/;
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
