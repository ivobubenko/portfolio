import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type Certification = { name: string; issuer: string; link: string; linkLabel: string };
type CertificationsProps = { certifications: Certification[] };

function Certifications({ certifications }: CertificationsProps) {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: 4, sm: 6 } }}>
            {certifications.map((certification) => (
                <Box
                    key={certification.name}
                    component="a"
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'text.primary', textDecoration: 'none',
                        '& .credential-link': { transition: 'color 180ms ease', textUnderlineOffset: '4px' },
                        '&:hover .credential-link': { textDecoration: 'underline', color: 'primary.dark' },
                    }}
                >
                    <Typography component="h3" variant="h6" sx={{ mb: 1 }}>{certification.name}</Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ mb: 3 }}>{certification.issuer}</Typography>
                    <Typography className="credential-link" component="span" variant="body2" sx={{ mt: 'auto', display: 'inline-flex', gap: 1, alignItems: 'center', color: 'primary.main', minHeight: 44, fontWeight: 600 }}>
                        {certification.linkLabel}<ArrowOutwardIcon sx={{ fontSize: 16, flexShrink: 0 }} />
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

export default Certifications;
