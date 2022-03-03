export const colors = {
    // primary: '#161616',
    primary: '#1a1e22',
    primary50: '#e8e9e9',
    primary100: '#d1d2d3',
    primary200: '#a3a5a7',
    primary300: '#76787a',
    primary400: '#25292d',
    primary500: '#1a1e22',
    primary600: '#15181b',
    primary700: '#101214',
    primary800: '#0a0c0e',
    primary900: '#050607',
    primaryLight: '#272d33',
    primaryDarker: '#111111',
    primaryDarkerLight: '#141414',
    // secondary: '#1d1d1d',
    secondary: '#23292e',
    // accent: '#d4a259',
    accent: '#d8d2cc',
    accent2: '#BDA26B',
    accent3: '#474c52',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#aaaaaa',
    textColor: '#d4d3d3',
    textColor2: '#b1b1b1',
    textColor3: '#ffffffb3',
    textColor4: '#4d5157',
    textColorButtonActive: '#d2d4d5',
    border: '#d9d9d9',
};

export const breakpoints = {
    huge: 1700,
    desktopL: 1440,
    desktop: 1150,
    laptop: 1024,
    tablet: 768,
    phone: 576,
    mobileM: 374,
};

export const theme = {
    colors,
    font: {
        primary: 'Muli, sans-serif',
        thin: 300,
        regular: 400,
        bold: 700,
    },

    mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
        acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
        return acc;
    }, {}),
};
