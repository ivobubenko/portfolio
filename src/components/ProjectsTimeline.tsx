import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CustomizedChip from './CustomizedChip';
import type { Experience } from '../i18n/portfolio';

type ProjectsTimelineProps = { experience: Experience[] };

export default function ProjectsTimeline({ experience }: ProjectsTimelineProps) {
    return (
        <Stack component="ol" spacing={5} sx={{ m: 0, p: 0, listStyle: 'none' }}>
            {experience.map((item, index) => (
                <Box component="li" key={`${item.company}-${item.role}`} sx={{ position: 'relative', pl: { xs: 3, sm: 4 } }}>
                    <Box aria-hidden="true" sx={{ position: 'absolute', left: 0, top: 8, width: 7, height: 7, borderRadius: '50%', bgcolor: index === 0 ? 'primary.main' : 'text.secondary' }} />
                    {index < experience.length - 1 && <Box aria-hidden="true" sx={{ position: 'absolute', left: 3, top: 24, bottom: -24, width: '1px', bgcolor: 'divider' }} />}
                    <Typography color="text.secondary" variant="body2" sx={{ mb: 1 }}>{item.period}</Typography>
                    <Typography component="h3" variant="h6" sx={{ mb: 2 }}>{item.role} - {item.company}</Typography>
                    {item.technologies && (
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                            {item.technologies.map((technology) => <CustomizedChip key={technology} label={technology} size="small" />)}
                        </Stack>
                    )}
                    <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0, maxWidth: '68ch', '& li::marker': { color: 'text.secondary', fontSize: '0.7em' } }}>
                        {item.details.map((detail) => <Typography key={detail} component="li" color="text.secondary">{detail}</Typography>)}
                    </Stack>
                </Box>
            ))}
        </Stack>
    );
}
