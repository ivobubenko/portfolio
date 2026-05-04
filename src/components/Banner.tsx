import { Stack, Typography, Button, Box } from "@mui/material"
import AnimatedBg from "./AnimatedBg"
interface profileInterface {
    profile: {
        name: string,
        role: string,
        location: string,
        summary:
        string,
    },
    ctas: {
        projects: string,
        experience: string,
        contact: string,
    }
};
function Banner({ profile, ctas }: profileInterface) {
    return (
        <Box
            id="home"
            component="section"
            sx={{
                mb: { xs: 7, md: 10 },
            }}
        >
            <AnimatedBg>
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
                            {ctas.projects}
                        </Button>
                        <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }} href="#experience">
                            {ctas.experience}
                        </Button>
                        <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }} href="#contact">
                            {ctas.contact}
                        </Button>
                    </Stack>
                </Stack>
            </AnimatedBg>
        </Box>)
}


export default Banner;
