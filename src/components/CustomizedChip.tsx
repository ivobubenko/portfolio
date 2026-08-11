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
                    position: 'relative',
                    height: 34,
                    overflow: 'hidden',
                    borderRadius: '999px',
                    borderWidth: '1px',
                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.dark',
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(99, 211, 200, 0.1)' : 'rgba(23, 107, 103, 0.08)',
                    backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, ${theme.palette.mode === 'dark' ? 0.08 : 0.5}), transparent 58%)`,
                    boxShadow: theme.palette.mode === 'dark'
                        ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 14px rgba(0, 0, 0, 0.2)'
                        : 'inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 4px 12px rgba(14, 79, 76, 0.08)',
                    fontSize: '0.73rem',
                    fontWeight: 700,
                    letterSpacing: '0.015em',
                    transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background-color 180ms ease',
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
                        transform: 'translateY(-2px)',
                        borderColor: 'currentColor',
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(99, 211, 200, 0.17)' : 'rgba(23, 107, 103, 0.13)',
                        boxShadow: theme.palette.mode === 'dark'
                            ? 'inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 8px 22px rgba(0, 0, 0, 0.3)'
                            : 'inset 0 1px 0 rgba(255, 255, 255, 0.78), 0 8px 20px rgba(14, 79, 76, 0.14)',
                    },
                    '&:active': {
                        transform: 'translateY(0)',
                    },
                    '&.Mui-disabled': {
                        opacity: 0.5,
                        transform: 'none',
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
