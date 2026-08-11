import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Paper from '@mui/material/Paper';
import CustomizedChip from './CustomizedChip';
import type { Experience } from '../i18n/portfolio';

type ProjectsTimelineProps = {
    experience: Experience[];
};

export default function ProjectsTimeline({ experience }: ProjectsTimelineProps) {
    return (
        <Timeline
            sx={{
                p: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {experience.map((item, index) => (
                <TimelineItem key={`${item.company}-${item.role}`}>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: 'secondary.main', boxShadow: '0 0 0 5px rgba(211, 95, 66, 0.12)' }} />
                        {index < experience.length - 1 && <TimelineConnector sx={{ bgcolor: 'divider', width: 2 }} />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper sx={{
                            p: { xs: 1.75, md: 2.25 },
                            ml: { xs: 0.5, md: 1.5 },
                            borderRadius: 1,
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'border-color 180ms ease, transform 180ms ease',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                width: 18,
                                height: 18,
                                borderTop: '1px solid',
                                borderRight: '1px solid',
                                borderColor: 'primary.main',
                                opacity: 0.45,
                            },
                            '&:hover': {
                                borderColor: 'primary.main',
                                transform: 'translateX(3px)',
                            },
                        }}>
                            <Typography
                                color="primary"
                                variant="overline"
                                sx={{ display: 'block', fontWeight: 700, mb: 0.75 }}
                            >
                                {item.period}
                            </Typography>
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                justifyContent="space-between"
                                alignItems={{ xs: 'flex-start', md: 'center' }}
                                spacing={1}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    {item.role} - {item.company}
                                </Typography>

                            </Stack>
                            {item.technologies && (
                                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
                                    {item.technologies.map((technology) => (
                                        <CustomizedChip key={technology} label={technology} size="small" />
                                    ))}
                                </Stack>
                            )}
                            <Divider sx={{ my: 1.5 }} />
                                <Stack component="ul" spacing={0.75} sx={{ pl: 2.5, m: 0 }}>
                                {item.details.map((detail) => (
                                    <Typography key={detail} component="li" color="text.secondary">
                                        {detail}
                                    </Typography>
                                ))}
                            </Stack>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
