import { Box, Typography, type SxProps } from "@mui/material"
import type { ElementType, ReactNode } from "react";

interface SectionProps {
    title: string,
    boxId: string,
    boxComponent?: ElementType,
    sx: SxProps,
    children: ReactNode
};


function Section({ title, boxId, boxComponent = "section", sx, children }: SectionProps) {
    return (<Box id={boxId} component={boxComponent} sx={{ mb: { xs: 7, md: 10 }, scrollMarginTop: 92 }}>
        <Typography variant="h4" sx={{ ...sx, display: 'flex', alignItems: 'center', gap: 1.5, fontSize: { xs: '1.75rem', md: '2.15rem' }, '&::before': { content: '""', width: 46, height: 9, flex: '0 0 auto', background: 'radial-gradient(circle at 4px 50%, currentColor 0 3px, transparent 3.5px), linear-gradient(90deg, transparent 8px, currentColor 8px 100%)', color: 'secondary.main' }, '&::after': { content: '""', height: 1, flex: 1, maxWidth: 180, ml: 0.5, background: 'linear-gradient(90deg, currentColor, transparent)', color: 'divider' } }}>
            {title}
        </Typography>
        {children}
    </Box>)
}

export default Section;
