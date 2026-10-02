import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import LanguageBtn from '../components/LanguageBtn';
import type { Language } from '../i18n/portfolio';
import type { ColorMode } from '../theme';

type NavbarLabels = {
  about: string;
  experience: string;
  projects: string;
  skills: string;
  education: string;
  contact: string;
};

function Navbar({
  title,
  mobileTitle,
  labels,
  language,
  onLanguageChange,
  colorMode,
  onColorModeChange,
}: {
  title: string;
  mobileTitle: string;
  labels: NavbarLabels;
  language: Language;
  onLanguageChange: (language: Language) => void;
  colorMode: ColorMode;
  onColorModeChange: () => void;
}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const pages = [
    { label: labels.projects, href: '#projects' },
    { label: labels.experience, href: '#experience' },
    { label: labels.skills, href: '#skills' },
    { label: labels.about, href: '#about' },
    { label: labels.education, href: '#education' },
    { label: labels.contact, href: '#contact' },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        bgcolor: 'background.default',
        backgroundImage: 'none',
        transition: 'background-color 250ms ease, border-color 250ms ease',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar component="nav" aria-label={language === 'sk' ? 'Hlavná navigácia' : 'Main navigation'} disableGutters sx={{ minHeight: { xs: 72, lg: 80 }, gap: 1, flexWrap: 'wrap', py: 1 }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
              fontWeight: 650,
              fontSize: '0.8125rem',
              letterSpacing: '0.06em',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls={anchorElNav ? 'menu-appbar' : undefined}
              aria-expanded={Boolean(anchorElNav)}
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: 22 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} component="a" href={page.href} onClick={handleCloseNavMenu}>
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontWeight: 650,
              fontSize: '0.8125rem',
              letterSpacing: '0.06em',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            {mobileTitle}
          </Typography>

          <Box sx={{ flex: '1 1 0', minWidth: 0, flexWrap: 'wrap', justifyContent: 'center', display: { xs: 'none', lg: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                href={page.href}
                sx={{ minWidth: 0, px: 1.25, color: 'text.secondary', '&:hover': { color: 'text.primary', bgcolor: 'action.hover' } }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Button
            variant="outlined"
            color="primary"
            href="#contact"
            sx={{ display: { xs: 'none', lg: 'inline-flex' } }}
          >
            {labels.contact}
          </Button>
          <Tooltip title={colorMode === 'dark' ? 'Use light mode' : 'Use dark mode'}>
            <IconButton
              aria-label={colorMode === 'dark' ? 'Use light mode' : 'Use dark mode'}
              onClick={onColorModeChange}
              color="inherit"
              sx={{ ml: { xs: 0, lg: 1 } }}
            >
              {colorMode === 'dark' ? <LightModeOutlinedIcon sx={{ fontSize: 20 }} /> : <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />}
            </IconButton>
          </Tooltip>
          <Box>
            <LanguageBtn language={language} onLanguageChange={onLanguageChange} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
