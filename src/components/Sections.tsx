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
    return (<Box id={boxId} component={boxComponent} sx={{ mb: { xs: 7, md: 10 } }}>
        <Typography variant="h4" className="mb-0" sx={sx}>
            {title}
        </Typography>
        {children}
    </Box>)
}

export default Section;
