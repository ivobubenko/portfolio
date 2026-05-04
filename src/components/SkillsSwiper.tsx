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
                    {skillGroups.map((group) => (
                        <SwiperSlide key={group.title}>
                            <Paper
                                sx={{
                                    height: '100%',
                                    p: 3,
                                    borderRadius: 2.5,
                                    border: '1px solid #e1eaf4',
                                    boxShadow: '0 18px 42px rgba(15, 23, 42, 0.12)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                                    {group.title}
                                </Typography>
                                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                    {group.items.map((item) => (
                                        <CustomizedChip key={item} label={item} />
                                    ))}
                                </Stack>
                            </Paper>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </StaticBg>
    )
}

export default SkillsSwiper;
