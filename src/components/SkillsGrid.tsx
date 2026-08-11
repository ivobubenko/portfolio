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

const cardAccents = [
    { solid: '#38bdb2', soft: 'rgba(56, 189, 178, 0.10)', hover: 'rgba(56, 189, 178, 0.17)' },
    { solid: '#e9785d', soft: 'rgba(233, 120, 93, 0.10)', hover: 'rgba(233, 120, 93, 0.17)' },
    { solid: '#d9a93f', soft: 'rgba(217, 169, 63, 0.11)', hover: 'rgba(217, 169, 63, 0.18)' },
];

function SkillsGrid({ skillGroups }: SkillsGridProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
                gap: 2,
            }}
        >
            {skillGroups.map((group, index) => {
                const accent = cardAccents[index % cardAccents.length];

                return (
                    <Paper
                        key={group.title}
                        component="article"
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: 168,
                            p: { xs: 2.5, md: 3 },
                            borderRadius: 2,
                            backgroundImage: `radial-gradient(circle at 100% 0, ${accent.soft}, transparent 42%)`,
                            transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: '0 0 auto 0',
                                height: 3,
                                background: `linear-gradient(90deg, ${accent.solid}, ${accent.solid}33 72%, transparent)`,
                            },
                            '&:hover': {
                                transform: 'translateY(-3px)',
                                borderColor: accent.solid,
                                boxShadow: (theme) => theme.palette.mode === 'dark'
                                    ? '0 18px 38px rgba(0, 0, 0, 0.3)'
                                    : '0 18px 38px rgba(28, 43, 39, 0.1)',
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.25,
                                '&::before': {
                                    content: '""',
                                    width: 8,
                                    height: 8,
                                    flex: '0 0 auto',
                                    bgcolor: accent.solid,
                                    boxShadow: `0 0 0 4px ${accent.soft}`,
                                },
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
                                    sx={{
                                        color: 'text.primary',
                                        bgcolor: accent.soft,
                                        borderColor: `${accent.solid}66`,
                                        boxShadow: 'none',
                                        '&:hover': {
                                            bgcolor: accent.hover,
                                            borderColor: accent.solid,
                                            boxShadow: 'none',
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
                    </Paper>
                );
            })}
        </Box>
    );
}

export default SkillsGrid;
