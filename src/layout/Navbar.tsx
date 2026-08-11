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
    { label: labels.about, href: '#about' },
    { label: labels.experience, href: '#experience' },
    { label: labels.projects, href: '#projects' },
    { label: labels.skills, href: '#skills' },
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
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(7, 19, 16, 0.88)' : 'rgba(247, 247, 243, 0.9)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              letterSpacing: 0,
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={page.href}
                    sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
                  >
                    {page.label}
                  </Typography>
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
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              letterSpacing: 0,
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            {mobileTitle}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                href={page.href}
                sx={{ mx: 0.25, color: 'text.secondary', display: 'block', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            href="#contact"
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            {labels.contact}
          </Button>
          <Tooltip title={colorMode === 'dark' ? 'Use light mode' : 'Use dark mode'}>
            <IconButton
              aria-label={colorMode === 'dark' ? 'Use light mode' : 'Use dark mode'}
              onClick={onColorModeChange}
              color="inherit"
              sx={{ ml: { xs: 0, md: 1 }, color: 'text.primary' }}
            >
              {colorMode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Tooltip>
          <Box sx={{ ml: { xs: 0, md: 1.5 } }}>
            <LanguageBtn language={language} onLanguageChange={onLanguageChange} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
