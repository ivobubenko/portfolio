import { Box, Typography, type SxProps } from "@mui/material"
import type { JSX } from "react";

interface SectionProps {
    title: String,
    boxId: String,
    boxComponent?: any,
    sx: SxProps,
    children: JSX.Element
};


function Section({ title, boxId, boxComponent = "section", sx, children }: SectionProps) {
    return (<Box id={boxId} component={boxComponent} sx={{ mb: { xs: 7, md: 10 } }}>
        <Typography variant="h4" className="mb-4" sx={sx}>
            {title}
        </Typography>
        {children}
    </Box>)
}

export default Section;