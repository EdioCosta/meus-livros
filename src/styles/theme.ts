import { createConfig } from '@gluestack-style/react';

export const theme = createConfig({
    tokens: {
        colors: {
            primary700: '#996DFF',
            secondary700: '#fba94c',
            green700: '#008f57',
            green500: '#00b37e',
            green300: '#04d361',
            gray700: '#121214',
            gray600: '#202024',
            gray500: '#29292e',
            gray400: '#323238',
            gray300: '#7c7c8a',
            gray200: '#c4c4cc',
            gray100: '#e1e1e6',
            yellow700: '#ffca00',
            yellow600: '#ffcf52',
            white: '#ffffff',
},
        fontSize: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 20,
            xl: 24,
        },
        space: {
            14: 56,
        },
        fonts: {
            heading: 'Roboto_700Bold',
            body: 'Roboto_400Regular',
        },
    },
    aliases: undefined
});
