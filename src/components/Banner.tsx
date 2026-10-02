import { Stack, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { PortfolioContent } from '../i18n/portfolio';
import sculpture from '../assets/hero-sculpture-1024.webp';
import sculptureSmall from '../assets/hero-sculpture-640.webp';
import './Banner.css';

type BannerProps = {
    profile: PortfolioContent['profile'];
    ctas: PortfolioContent['heroCtas'];
};

function Banner({ profile, ctas }: BannerProps) {
    return (
        <Box id="home" className="hero-layout" component="section" aria-labelledby="profile-name" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 16 }}>
            <Box className="hero-content" sx={{ maxWidth: 760, minWidth: 0 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{profile.location}</Typography>
                <Typography id="profile-name" component="h1" variant="h1" sx={{ mb: 2 }}>{profile.name}</Typography>
                <Typography component="p" variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 500 }}>{profile.role}</Typography>
                <Typography color="text.secondary" sx={{ maxWidth: '66ch' }}>{profile.summary}</Typography>
                <Stack direction="row" spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap" sx={{ mt: 4, alignItems: 'center', '& > a': { px: { xs: 1.5, sm: 2.5 } } }}>
                    <Button variant="contained" href="#projects" endIcon={<ArrowForwardIcon sx={{ fontSize: '16px !important' }} />}>
                        {ctas.projects}
                    </Button>
                    <Button variant="text" href="#experience" sx={{ color: 'text.primary' }}>{ctas.experience}</Button>
                    <Button variant="text" href="#contact" sx={{ color: 'text.secondary' }}>{ctas.contact}</Button>
                </Stack>
            </Box>
            <Box
                className="hero-sculpture"
                aria-hidden="true"
                sx={{ '& img': { filter: (theme) => theme.palette.mode === 'dark' ? 'brightness(0.82) saturate(0.78)' : 'none' } }}
            >
                <img
                    src={sculpture}
                    srcSet={`${sculptureSmall} 640w, ${sculpture} 1024w`}
                    sizes="(min-width: 1200px) 408px, (min-width: 900px) 33.6vw, (min-width: 768px) 28.8vw, 1px"
                    width={1024}
                    height={1024}
                    alt=""
                    decoding="async"
                    fetchPriority="high"
                    draggable={false}
                />
            </Box>
        </Box>
    );
}

export default Banner;
