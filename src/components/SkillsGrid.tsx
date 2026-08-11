import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomizedChip from './CustomizedChip';

type SkillGroup = {
    title: string;
    items: string[];
};

type SkillsGridProps = {
    skillGroups: SkillGroup[];
};

function SkillsGrid({ skillGroups }: SkillsGridProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
                gap: 1.5,
            }}
        >
            {skillGroups.map((group) => (
                    <Paper
                        key={group.title}
                        component="article"
                        sx={{
                            p: { xs: 2, md: 2.25 },
                            borderRadius: 2,
                            transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                borderColor: 'primary.main',
                                boxShadow: (theme) => theme.palette.mode === 'dark'
                                    ? '0 10px 24px rgba(0, 0, 0, 0.22)'
                                    : '0 10px 24px rgba(28, 43, 39, 0.07)',
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 1.5,
                            }}
                        >
                            {group.title}
                        </Typography>
                        <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap">
                            {group.items.map((item) => (
                                <CustomizedChip
                                    key={item}
                                    label={item}
                                    size="small"
                                    sx={{ boxShadow: 'none' }}
                                />
                            ))}
                        </Stack>
                    </Paper>
            ))}
        </Box>
    );
}

export default SkillsGrid;
