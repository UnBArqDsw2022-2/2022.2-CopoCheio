import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string,
        alternative_primary: string,
        secondary: string,
        white: string,
        atoms: {
            title: string,
            text: string,
            subtitle: string,
        }
    }
}
