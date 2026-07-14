import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import type { Language } from '../i18n/portfolio';

type LanguageOption = {
  code: Language;
  emoji: string;
  shortLabel: string;
};

const languageOptions: LanguageOption[] = [
  { code: 'en', emoji: '🇬🇧', shortLabel: 'EN' },
  { code: 'sk', emoji: '🇸🇰', shortLabel: 'SK' },
];

type LanguageBtnProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

function LanguageBtn({ language, onLanguageChange }: LanguageBtnProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const selectedLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (nextLanguage: Language) => {
    onLanguageChange(nextLanguage);
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls={open ? 'language-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="menu"
        aria-label="Change language"
        color="inherit"
        onClick={handleOpen}
        startIcon={<LanguageIcon />}
        sx={{ color: 'text.primary', minWidth: 82, borderColor: 'divider' }}
        variant="outlined"
      >
        {selectedLanguage.shortLabel}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-label': 'Language options' }}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.code}
            selected={option.code === language}
            onClick={() => handleSelect(option.code)}
          >
            {option.emoji}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageBtn;
