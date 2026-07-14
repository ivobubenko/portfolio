import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: { main: '#176b67', dark: '#0e4f4c', contrastText: '#ffffff' },
    secondary: { main: '#d35f42' },
    background: { default: '#f7f7f3', paper: '#ffffff' },
    text: { primary: '#17211f', secondary: '#596562' },
    divider: '#dde3df',
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
    MuiButton: {
      styleOverrides: {
        root: { minHeight: 42, paddingInline: 18, boxShadow: 'none' },
        contained: { '&:hover': { boxShadow: '0 8px 20px rgba(23, 107, 103, 0.2)' } },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { border: '1px solid #dde3df', boxShadow: '0 12px 35px rgba(28, 43, 39, 0.06)' },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { border: '1px solid #d7dfda', boxShadow: '0 18px 45px rgba(28, 43, 39, 0.08)' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { backgroundColor: '#f1f7f5', borderColor: '#bad3ce', fontWeight: 600 },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
