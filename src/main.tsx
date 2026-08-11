import { StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.tsx'
import { createAppTheme, type ColorMode } from './theme.ts'

function getInitialColorMode(): ColorMode {
  const savedMode = localStorage.getItem('portfolio-color-mode');
  if (savedMode === 'light' || savedMode === 'dark') return savedMode;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function Root() {
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode);
  const theme = useMemo(() => createAppTheme(colorMode), [colorMode]);

  useEffect(() => {
    localStorage.setItem('portfolio-color-mode', colorMode);
    document.documentElement.style.colorScheme = colorMode;
  }, [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App
        colorMode={colorMode}
        onColorModeChange={() => setColorMode((current) => current === 'light' ? 'dark' : 'light')}
      />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
