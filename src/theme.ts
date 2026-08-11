import { createTheme } from '@mui/material/styles';

export type ColorMode = 'light' | 'dark';

export function createAppTheme(mode: ColorMode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: isDark
        ? { main: '#63d3c8', dark: '#39aaa2', contrastText: '#061412' }
        : { main: '#176b67', dark: '#0e4f4c', contrastText: '#ffffff' },
      secondary: isDark ? { main: '#f28a6f', dark: '#d76950' } : { main: '#d35f42' },
      background: isDark
        ? { default: '#071310', paper: '#0e201d' }
        : { default: '#f7f7f3', paper: '#ffffff' },
      text: isDark
        ? { primary: '#eff8f5', secondary: '#a5bab5' }
        : { primary: '#17211f', secondary: '#596562' },
      divider: isDark ? 'rgba(151, 196, 187, 0.18)' : '#dde3df',
    },
    typography: {
      fontFamily: '"Manrope Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 13,
      h3: { fontSize: '2.4rem', fontWeight: 750, letterSpacing: '-0.025em', lineHeight: 1.08 },
      h4: { fontSize: '1.7rem', fontWeight: 750, letterSpacing: '-0.02em', lineHeight: 1.15 },
      h5: { fontSize: '1.2rem', fontWeight: 650, letterSpacing: '-0.01em', lineHeight: 1.35 },
      h6: { fontSize: '1.02rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.35 },
      body1: { fontSize: '0.9rem', lineHeight: 1.55 },
      body2: { fontSize: '0.8rem', lineHeight: 1.5 },
      button: { fontSize: '0.8rem', fontWeight: 700, letterSpacing: 0, textTransform: 'none' },
      overline: { fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em' },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 220ms ease, color 220ms ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { minHeight: 38, paddingInline: 14, boxShadow: 'none' },
          contained: {
            '&:hover': {
              boxShadow: isDark
                ? '0 5px 14px rgba(99, 211, 200, 0.16)'
                : '0 5px 14px rgba(23, 107, 103, 0.16)',
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${isDark ? 'rgba(151, 196, 187, 0.18)' : '#dde3df'}`,
            boxShadow: isDark
              ? '0 5px 18px rgba(0, 0, 0, 0.18)'
              : '0 5px 18px rgba(28, 43, 39, 0.045)',
          },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${isDark ? 'rgba(151, 196, 187, 0.2)' : '#d7dfda'}`,
            boxShadow: isDark
              ? '0 6px 20px rgba(0, 0, 0, 0.2)'
              : '0 6px 20px rgba(28, 43, 39, 0.055)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? 'rgba(99, 211, 200, 0.1)' : '#f1f7f5',
            borderColor: isDark ? 'rgba(99, 211, 200, 0.34)' : '#bad3ce',
            fontWeight: 600,
          },
        },
      },
    },
  });
}
