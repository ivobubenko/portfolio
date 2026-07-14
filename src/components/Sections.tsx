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
        <Typography variant="h4" sx={{ ...sx, display: 'flex', alignItems: 'center', gap: 1.5, fontSize: { xs: '1.75rem', md: '2.15rem' }, '&::before': { content: '""', width: 34, height: 3, flex: '0 0 auto', bgcolor: 'secondary.main' } }}>
            {title}
        </Typography>
        {children}
    </Box>)
}

export default Section;
