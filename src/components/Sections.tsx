import { Box, Typography } from "@mui/material"
import type { ElementType, ReactNode } from "react";

interface SectionProps {
    title: string,
    boxId: string,
    boxComponent?: ElementType,
    children: ReactNode
};


function Section({ title, boxId, boxComponent = "section", children }: SectionProps) {
    return (<Box id={boxId} component={boxComponent} sx={{ mb: { xs: 5, md: 7 }, scrollMarginTop: 80 }}>
        <Typography variant="h4" sx={{ mb: { xs: 2.25, md: 3 }, display: 'flex', alignItems: 'center', gap: 1.25, fontSize: { xs: '1.4rem', md: '1.7rem' }, '&::before': { content: '""', width: 38, height: 8, flex: '0 0 auto', background: 'radial-gradient(circle at 4px 50%, currentColor 0 3px, transparent 3.5px), linear-gradient(90deg, transparent 8px, currentColor 8px 100%)', color: 'secondary.main' }, '&::after': { content: '""', height: 1, flex: 1, maxWidth: 140, ml: 0.25, background: 'linear-gradient(90deg, currentColor, transparent)', color: 'divider' } }}>
            {title}
        </Typography>
        {children}
    </Box>)
}

export default Section;
