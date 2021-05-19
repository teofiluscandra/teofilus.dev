import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    body: `Gentium Book Basic, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Gentium Book Basic,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
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
    primary: '#CD0000',
    secondary: '#FFD900',
  },
});

export default theme;
