import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LanguageBtn from '../components/LanguageBtn';
import type { Language } from '../i18n/portfolio';

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
}: {
  title: string;
  mobileTitle: string;
  labels: NavbarLabels;
  language: Language;
  onLanguageChange: (language: Language) => void;
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
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #e8edf6' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              letterSpacing: '.08rem',
              color: '#0c1a3a',
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
              fontWeight: 700,
              letterSpacing: '.08rem',
              color: '#0c1a3a',
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
                sx={{ my: 2, color: '#243146', display: 'block' }}
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
          <Box sx={{ ml: { xs: 0, md: 1.5 } }}>
            <LanguageBtn language={language} onLanguageChange={onLanguageChange} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
