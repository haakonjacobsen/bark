export const palette = {
    yellow1: '#EDD994',
    yellow2: '#FEF6AA',
    lightGray: '#F9F9F9',
    darkGray: '#717171',
    black: '#0B0B0B',
    white: '#FFFFFF',
    red: '#FF8585',
}

export const defaultTheme = {
    colors: {
        background: palette.white,
        foreground: palette.black,
        primary: palette.yellow1,
        success: palette.yellow2,
        danger: palette.red,
        failure: palette.red,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        header: {
            fontFamily: 'Raleway',
            fontSize: 36,
            fontWeight: 'bold',
            color: palette.darkGray
        },
        body: {
            fontFamily: 'Merriweather',
            fontSize: 16,
        },
    }
};

export const darkTheme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        background: palette.black,
        foreground: palette.white,
    }
}
