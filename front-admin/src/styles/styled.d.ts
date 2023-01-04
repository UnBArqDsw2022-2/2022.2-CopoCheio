import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string,
        alternative: string,
        success: string,
        denied: string,
        black: string,
        white: string,
        alternative_white: string,
        grey: string
        atoms: {
            title: string,
            text: string,
            subtitle: string,
          }
    }
}
