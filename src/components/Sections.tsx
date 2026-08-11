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
        <Typography variant="h4" sx={{ mb: { xs: 2.25, md: 3 }, display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '1.4rem', md: '1.7rem' }, '&::before': { content: '""', width: 22, height: 3, flex: '0 0 auto', borderRadius: 2, bgcolor: 'secondary.main' } }}>
            {title}
        </Typography>
        {children}
    </Box>)
}

export default Section;
