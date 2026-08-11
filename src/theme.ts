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
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h3: { fontWeight: 750, letterSpacing: 0, lineHeight: 1.08 },
      h4: { fontWeight: 750, letterSpacing: 0, lineHeight: 1.15 },
      h5: { fontWeight: 600, letterSpacing: 0, lineHeight: 1.35 },
      h6: { fontWeight: 700, letterSpacing: 0, lineHeight: 1.35 },
      button: { fontWeight: 700, letterSpacing: 0, textTransform: 'none' },
      overline: { fontWeight: 700, letterSpacing: '0.1em' },
    },
    shape: { borderRadius: 8 },
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
          root: { minHeight: 42, paddingInline: 18, boxShadow: 'none' },
          contained: {
            '&:hover': {
              boxShadow: isDark
                ? '0 8px 24px rgba(99, 211, 200, 0.2)'
                : '0 8px 20px rgba(23, 107, 103, 0.2)',
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
              ? '0 14px 38px rgba(0, 0, 0, 0.26)'
              : '0 12px 35px rgba(28, 43, 39, 0.06)',
          },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${isDark ? 'rgba(151, 196, 187, 0.2)' : '#d7dfda'}`,
            boxShadow: isDark
              ? '0 18px 46px rgba(0, 0, 0, 0.3)'
              : '0 18px 45px rgba(28, 43, 39, 0.08)',
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
