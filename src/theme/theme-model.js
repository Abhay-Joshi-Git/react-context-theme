
export const themeType = {
    dark: 1,
    light: 2
}

export const availableTheme = [
    {
        displayName: 'Dark',
        value: themeType.dark,
    },
    {
        displayName:  'Light',
        value: themeType.light
    }
];

export const elementThemeDetails = {
    dark: {
        primaryBgColor: 'peru',
        primaryColor: 'black',
        secondaryBgColor: 'brown',
        secondaryColor: 'white',
        secondaryBoxShadow: '6px 6px 6px rgba(225, 69, 10, 0.4)'
    },
    light: {
        primaryBgColor: 'rebeccapurple',
        primaryColor: 'white',
        secondaryBgColor: 'powderblue',
        secondaryColor: 'black',
        secondaryBoxShadow: '6px 6px 6px rgba(155, 79, 10, 0.4)'
    }
}

export const defaultTheme = {
    activeTheme: themeType.dark
};


export const getThemeDetailsByType = (type) => {
    return type === themeType.dark
        ? elementThemeDetails.dark
        : elementThemeDetails.light
}
