import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const config = {
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    body: `Lato, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    mono: 'Menlo, monospace',
    mont: 'Montserrat, sans-serif',
  },
  fontWeights: {
    ...chakraTheme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    primary: chakraTheme.colors.red[500],
    secondary: chakraTheme.colors.yellow[500],
  },
};

const theme = extendTheme(config);
export default theme;
