// eslint-disable-next-line import/no-anonymous-default-export
export const pallete = {
  primary: '#191C24',
  alternative_primary: '#272F38',
  secondary: '#DAB783',
  white: '#fff',
  alternative_white: '#595F66'
};

export const colors = {
  ...pallete,
  atoms: {
    title: pallete.secondary,
    text: pallete.secondary,
    subtitle: pallete.secondary,
  }
}
