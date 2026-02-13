import { Box, Stack, Typography, Button } from "@mui/material"
interface profileInterface {
    profile: {
        name: String,
        role: String,
        location: String,
        summary:
        String,
    }
};
function Banner({ profile }: profileInterface) {
    return (<Box
        id="home"
        component="section"
        sx={{
            mb: { xs: 7, md: 10 },
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            background:
                'linear-gradient(135deg, rgba(12,26,58,1) 0%, rgba(34,70,130,1) 55%, rgba(72,111,179,1) 100%)',
            color: '#fff',
        }}
    >
        <Stack spacing={2.5}>
            <Typography variant="overline" sx={{ letterSpacing: 1.4 }}>
                {profile.location}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {profile.name}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.92 }}>
                {profile.role}
            </Typography>
            <Typography sx={{ maxWidth: 780, fontSize: '1.05rem', opacity: 0.9 }}>
                {profile.summary}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant="contained" color="warning" href="#projects">
                    View Projects
                </Button>
                <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }} href="#contact">
                    Contact Me
                </Button>
            </Stack>
        </Stack>
    </Box>)
}


export default Banner;