import Box from '@mui/material/Box';
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
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '176px minmax(0, 1fr)' },
                gap: { xs: 3, md: 6 },
                py: { xs: 6, md: 8 },
                borderTop: '1px solid',
                borderColor: 'divider',
                scrollMarginTop: 16,
            }}
        >
            <Typography id={titleId} component="h2" variant="h2">{title}</Typography>
            <Box sx={{ minWidth: 0 }}>{children}</Box>
        </Box>
    );
}

export default Section;
