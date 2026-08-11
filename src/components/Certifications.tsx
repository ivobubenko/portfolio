import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Certification = {
    name: string;
    issuer: string;
    link: string;
    linkLabel: string;
};

type CertificationsProps = {
    certifications: Certification[];
};

function Certifications({ certifications }: CertificationsProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                gap: 1.5,
            }}
        >
            {certifications.map((certification) => (
                <Paper
                    key={certification.name}
                    component="a"
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        display: 'block',
                        position: 'relative',
                        overflow: 'hidden',
                        p: { xs: 2, md: 2.5 },
                        color: 'text.primary',
                        textDecoration: 'none',
                        borderRadius: 2,
                        backgroundImage: (theme) => theme.palette.mode === 'dark'
                            ? 'radial-gradient(circle at 0 0, rgba(99, 211, 200, 0.13), transparent 52%)'
                            : 'radial-gradient(circle at 0 0, rgba(23, 107, 103, 0.1), transparent 52%)',
                        transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 14,
                            right: 14,
                            width: 24,
                            height: 24,
                            borderTop: '2px solid',
                            borderRight: '2px solid',
                            borderColor: 'primary.main',
                            opacity: 0.45,
                        },
                        '&:hover': {
                            transform: 'translateY(-3px)',
                            borderColor: 'primary.main',
                            boxShadow: (theme) => theme.palette.mode === 'dark'
                                ? '0 18px 42px rgba(0, 0, 0, 0.32)'
                                : '0 18px 42px rgba(28, 43, 39, 0.11)',
                        },
                        '&:focus-visible': {
                            outline: '3px solid',
                            outlineColor: 'primary.main',
                            outlineOffset: 3,
                        },
                    }}
                >
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <Box
                            sx={{
                                display: 'grid',
                                placeItems: 'center',
                                flex: '0 0 auto',
                                width: 42,
                                height: 42,
                                color: 'primary.main',
                                bgcolor: (theme) => theme.palette.mode === 'dark'
                                    ? 'rgba(99, 211, 200, 0.12)'
                                    : 'rgba(23, 107, 103, 0.08)',
                                border: '1px solid',
                                borderColor: 'primary.main',
                                borderRadius: 1.5,
                            }}
                        >
                            <Box
                                component="span"
                                aria-hidden="true"
                                sx={{ fontSize: 21, fontWeight: 800, lineHeight: 1 }}
                            >
                                ✓
                            </Box>
                        </Box>
                        <Box sx={{ minWidth: 0, pr: 2 }}>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>
                                {certification.name}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
                                {certification.issuer}
                            </Typography>
                            <Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: 'primary.main' }}>
                                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                                    {certification.linkLabel}
                                </Typography>
                                <Box component="span" aria-hidden="true" sx={{ fontSize: 17, lineHeight: 1 }}>
                                    ↗
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>
            ))}
        </Box>
    );
}

export default Certifications;
