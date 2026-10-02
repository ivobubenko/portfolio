import { createTheme } from '@mui/material/styles';

export type ColorMode = 'light' | 'dark';

// Both themes share a hierarchy, with independently chosen warm neutrals.
export const colorTokens = {
  light: {
    background: '#f7f5f0', surface: '#fdfcf9', text: '#292824', muted: '#68665f',
    border: '#dedbd3', accent: '#35665c', accentHover: '#285247', onAccent: '#ffffff',
    hover: 'rgba(41, 40, 36, 0.045)', shadow: '0 8px 32px rgba(41, 40, 36, 0.06)',
  },
  dark: {
    background: '#20211f', surface: '#282a27', text: '#efede7', muted: '#b0b1a9',
    border: '#3e413b', accent: '#a2c6b8', accentHover: '#bdd9cd', onAccent: '#202b25',
    hover: 'rgba(239, 237, 231, 0.055)', shadow: '0 8px 32px rgba(0, 0, 0, 0.16)',
  },
} as const;

export function createAppTheme(mode: ColorMode) {
  const colors = colorTokens[mode];

  return createTheme({
    spacing: 8,
    palette: {
      mode,
      primary: { main: colors.accent, dark: colors.accentHover, contrastText: colors.onAccent },
      secondary: { main: colors.accent },
      background: { default: colors.background, paper: colors.surface },
      text: { primary: colors.text, secondary: colors.muted },
      divider: colors.border,
      action: { hover: colors.hover, selected: colors.hover },
    },
    typography: {
      fontFamily: '"Manrope Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: 16,
      h1: { fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 1.15 },
      h2: { fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.4 },
      h3: { fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.25 },
      h4: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.35 },
      h5: { fontSize: '1.25rem', fontWeight: 550, letterSpacing: '-0.02em', lineHeight: 1.4 },
      h6: { fontSize: '1.0625rem', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.5 },
      body1: { fontSize: '1rem', lineHeight: 1.8 },
      body2: { fontSize: '0.875rem', lineHeight: 1.7 },
      button: { fontSize: '0.8125rem', fontWeight: 600, letterSpacing: 0, textTransform: 'none', lineHeight: 1.5 },
      overline: { fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'none' },
    },
    shape: { borderRadius: 8 },
    transitions: {
      duration: { shortest: 150, shorter: 180, short: 200, standard: 250, complex: 350 },
      easing: { easeInOut: 'cubic-bezier(0.2, 0, 0, 1)' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            '--focus-color': colors.accent,
            '--selection-color': colors.onAccent,
            '--selection-background': colors.accent,
            transition: 'background-color 250ms ease, color 250ms ease',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 24, paddingRight: 24,
            '@media (min-width: 600px)': { paddingLeft: 32, paddingRight: 32 },
            '@media (min-width: 1200px)': { maxWidth: 1184, paddingLeft: 48, paddingRight: 48 },
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true, disableRipple: true },
        styleOverrides: {
          root: {
            minHeight: 44, padding: '10px 20px', boxShadow: 'none',
            transition: 'background-color 180ms ease, border-color 180ms ease, color 180ms ease',
          },
          outlined: {
            color: colors.text, borderColor: colors.border,
            '&:hover': { borderColor: colors.muted, backgroundColor: colors.hover },
          },
          text: { paddingInline: 12 },
          contained: { '&:hover': { backgroundColor: colors.accentHover, boxShadow: 'none' } },
        },
      },
      MuiIconButton: {
        defaultProps: { disableRipple: true },
        styleOverrides: {
          root: { width: 44, height: 44, borderRadius: 8, color: colors.muted, transition: 'background-color 180ms ease, color 180ms ease' },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { backgroundImage: 'none', boxShadow: 'none' } },
      },
      MuiChip: {
        styleOverrides: {
          root: { height: 'auto', minHeight: 32, maxWidth: '100%', borderRadius: 4, fontSize: '0.75rem', fontWeight: 500, color: colors.muted, backgroundColor: colors.hover, border: 0 },
          label: { padding: '6px 10px', whiteSpace: 'normal', lineHeight: 1.5 },
          sizeSmall: { minHeight: 28 },
        },
      },
      MuiMenu: {
        styleOverrides: { paper: { marginTop: 8, border: `1px solid ${colors.border}`, boxShadow: colors.shadow, minWidth: 160 } },
      },
      MuiMenuItem: { styleOverrides: { root: { minHeight: 44, fontSize: '0.875rem', paddingInline: 20 } } },
    },
  });
}
