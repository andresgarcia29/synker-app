import colors from 'vuetify/es5/util/colors'

export default {
  breakpoint: {},
  icons: {},
  lang: {},
  rtl: false,
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#9c27b0',
        accent: '#00bcd4',
        error: '#f44336',
        warning: '#ff5722',
        info: '#009688',
        success: '#4caf50',
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
}
