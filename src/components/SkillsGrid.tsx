import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type SkillGroup = { title: string; items: string[] };
type SkillsGridProps = { skillGroups: SkillGroup[] };

function SkillsGrid({ skillGroups }: SkillsGridProps) {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: 4, sm: '40px 48px' } }}>
            {skillGroups.map((group) => (
                <Box key={group.title} component="article">
                    <Typography component="h3" variant="h6" sx={{ mb: 1.5 }}>{group.title}</Typography>
                    <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0', m: 0, p: 0, listStyle: 'none' }}>
                        {group.items.map((item) => (
                            <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ '&:not(:last-child)::after': { content: '"·"', display: 'inline-block', mx: 1, color: 'text.secondary' } }}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default SkillsGrid;
