import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomizedChip from './CustomizedChip';
import StaticBg from './StaticBg';

type SkillGroup = {
    title: string;
    items: string[];
};

type SkillsSwiperProps = {
    skillGroups: SkillGroup[];
};

const cardAccents = [
    { solid: '#63d3c8', soft: 'rgba(99, 211, 200, 0.16)' },
    { solid: '#f28a6f', soft: 'rgba(242, 138, 111, 0.16)' },
    { solid: '#f2c66d', soft: 'rgba(242, 198, 109, 0.16)' },
];

function SkillsSwiper({ skillGroups }: SkillsSwiperProps) {
    return (
        <StaticBg>
            <Box
                sx={{
                    height: { xs: 380, md: 360 },
                    py: 2,
                    '& .swiper': {
                        height: '100%',
                        pb: 5,
                        px: { xs: 0, md: 4 },
                    },
                    '& .swiper-slide': {
                        height: 'auto',
                        opacity: 0.42,
                        transition: 'opacity 300ms ease, filter 300ms ease',
                        filter: 'saturate(0.72)',
                    },
                    '& .swiper-slide-active': {
                        opacity: 1,
                        filter: 'saturate(1)',
                        '& .skill-card': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 28px 65px rgba(2, 14, 13, 0.38)',
                        },
                    },
                    '& .swiper-slide-prev, & .swiper-slide-next': {
                        opacity: 0.72,
                    },
                    '& .swiper-pagination': {
                        bottom: 8,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 0.5,
                    },
                    '& .swiper-pagination-bullet': {
                        backgroundColor: '#fff',
                        opacity: 0.42,
                        width: 8,
                        height: 8,
                        margin: '0 3px !important',
                    },
                    '& .swiper-pagination-bullet-active': {
                        opacity: 1,
                    },
                }}
            >
                <Swiper
                    direction="horizontal"
                    effect="coverflow"
                    centeredSlides
                    grabCursor
                    loop={skillGroups.length > 3}
                    slidesPerView={1.12}
                    spaceBetween={0}
                    speed={650}
                    mousewheel
                    pagination={{ clickable: true }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 28,
                        depth: 170,
                        modifier: 1.25,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Mousewheel, Pagination]}
                    breakpoints={{
                        600: {
                            slidesPerView: 1.45,
                        },
                        900: {
                            slidesPerView: 1.9,
                        },
                        1200: {
                            slidesPerView: 2.25,
                        },
                    }}
                    className="mySwiper"
                >
                    {skillGroups.map((group, index) => {
                        const accent = cardAccents[index % cardAccents.length];

                        return (
                        <SwiperSlide key={group.title}>
                            <Paper
                                className="skill-card"
                                sx={{
                                    height: '100%',
                                    p: { xs: 2.75, md: 3.5 },
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    color: '#f5fbfa',
                                    bgcolor: 'rgba(8, 29, 27, 0.88)',
                                    backdropFilter: 'blur(14px)',
                                    border: `1px solid ${accent.solid}66`,
                                    boxShadow: '0 18px 42px rgba(2, 14, 13, 0.28)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: '0 auto 0 0',
                                        width: 5,
                                        bgcolor: accent.solid,
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: 0,
                                        opacity: 0.18,
                                        pointerEvents: 'none',
                                        backgroundImage: `repeating-linear-gradient(90deg, ${accent.solid} 0 1px, transparent 1px 42px), repeating-linear-gradient(0deg, ${accent.solid} 0 1px, transparent 1px 42px)`,
                                        maskImage: 'linear-gradient(110deg, transparent 18%, #000 100%)',
                                    },
                                }}
                            >
                                <Box
                                    aria-hidden
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        width: 42,
                                        height: 4,
                                        mb: 2,
                                        bgcolor: accent.solid,
                                        boxShadow: `12px 0 0 ${accent.soft}`,
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{ position: 'relative', zIndex: 1, mb: 2.5, color: '#fff', maxWidth: 320 }}
                                >
                                    {group.title}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    useFlexGap
                                    flexWrap="wrap"
                                    sx={{ position: 'relative', zIndex: 1 }}
                                >
                                    {group.items.map((item) => (
                                        <CustomizedChip
                                            key={item}
                                            label={item}
                                            sx={{
                                                height: 34,
                                                color: '#eef8f6',
                                                bgcolor: accent.soft,
                                                borderColor: `${accent.solid}77`,
                                                '& .MuiChip-label': { px: 1.5 },
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Paper>
                        </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>
        </StaticBg>
    )
}

export default SkillsSwiper;
