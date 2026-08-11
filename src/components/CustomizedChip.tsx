import Chip from '@mui/material/Chip';
import type { ChipProps } from '@mui/material/Chip';

type CustomizedChipProps = ChipProps;

function CustomizedChip({ sx, color = 'primary', variant = 'outlined', ...props }: CustomizedChipProps) {
    return (
        <Chip
            {...props}
            color={color}
            variant={variant}
            sx={[
                (theme) => ({
                    height: 34,
                    borderRadius: '999px',
                    borderWidth: '1px',
                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.dark',
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(99, 211, 200, 0.1)' : 'rgba(23, 107, 103, 0.08)',
                    boxShadow: 'none',
                    fontSize: '0.73rem',
                    fontWeight: 700,
                    letterSpacing: 0,
                    transition: 'border-color 160ms ease, background-color 160ms ease',
                    '& .MuiChip-label': {
                        px: 1.75,
                    },
                    '&.MuiChip-sizeSmall': {
                        height: 28,
                        fontSize: '0.68rem',
                        '& .MuiChip-label': {
                            px: 1.4,
                        },
                    },
                    '&:hover': {
                        borderColor: 'currentColor',
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(99, 211, 200, 0.17)' : 'rgba(23, 107, 103, 0.13)',
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                        transition: 'none',
                    },
                }),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        />
    );
}

export default CustomizedChip;
