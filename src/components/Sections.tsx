import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import type { ElementType, ReactNode } from 'react';

interface SectionProps {
    title: string;
    boxId: string;
    boxComponent?: ElementType;
    children: ReactNode;
}

function Section({ title, boxId, boxComponent = 'section', children }: SectionProps) {
    const titleId = `${boxId}-title`;

    return (
        <Box
            id={boxId}
            component={boxComponent}
            aria-labelledby={titleId}
            sx={{ mb: { xs: 5, md: 7 }, scrollMarginTop: 80 }}
        >
            <Box
                component="header"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.25, md: 1.5 },
                    mb: { xs: 2.25, md: 3 },
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        width: 4,
                        height: { xs: 20, md: 22 },
                        flex: '0 0 auto',
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                    }}
                />
                <Typography
                    id={titleId}
                    component="h2"
                    variant="h4"
                    sx={{
                        flex: '0 0 auto',
                        m: 0,
                        fontSize: { xs: '1.3rem', md: '1.45rem' },
                        fontWeight: 750,
                        lineHeight: 1.2,
                        letterSpacing: '-0.015em',
                    }}
                >
                    {title}
                </Typography>
                <Divider sx={{ flex: 1, ml: { xs: 0, md: 0.5 } }} />
            </Box>
            {children}
        </Box>
    );
}

export default Section;
