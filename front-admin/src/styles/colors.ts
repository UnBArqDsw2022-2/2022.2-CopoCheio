// eslint-disable-next-line import/no-anonymous-default-export
export const pallete =  {
  primary: '#FEA444',
  alternative: '#8257E5',
  success: '#8CE563',
  denied: '#FF5F5F',
  black: '#4a4a4a',
  white: '#f9f9f9',
  alternative_white: '#fefefe',
  grey: '#999'
};

export const colors = {
  ...pallete,
  atoms: {
    title: pallete.black,
    text: pallete.grey,
    subtitle: pallete.grey,
  }
}
