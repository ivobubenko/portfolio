import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CustomizedChip from './components/CustomizedChip'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import Section from './components/Sections';
import Banner from './components/Banner';
import Contact from './components/Contact';
import { defaultLanguage, getPortfolioContent, type Language } from './i18n/portfolio';
import ProjectsTimeline from './components/ProjectsTimeline';
import SkillsSwiper from './components/SkillsSwiper';
import type { ColorMode } from './theme';

type AppProps = {
  colorMode: ColorMode;
  onColorModeChange: () => void;
};

function App({ colorMode, onColorModeChange }: AppProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const content = getPortfolioContent(language);

  useEffect(() => {
    document.documentElement.lang = language;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = content.profile.summary;
    }
  }, [content.profile.summary, language]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        backgroundImage: (theme) => theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 50% 0, rgba(42, 119, 108, 0.18), transparent 520px)'
          : 'linear-gradient(180deg, #eef4f1 0, #f7f7f3 420px)',
        minHeight: '100vh',
        transition: 'background-color 220ms ease',
      }}
    >
      <Navbar
        title={content.brand.desktopTitle}
        mobileTitle={content.brand.mobileTitle}
        labels={content.nav}
        language={language}
        onLanguageChange={setLanguage}
        colorMode={colorMode}
        onColorModeChange={onColorModeChange}
      />
      <Container maxWidth="lg" sx={{ py: { xs: 3.5, md: 6 } }}>
        <Banner profile={content.profile} ctas={content.heroCtas} />
        <Section boxId="about" title={content.sections.about} sx={{ mb: { xs: 7, md: 10 } }}>
          <Stack spacing={2.5}>
            {content.about.paragraphs.map((paragraph) => (
              <Typography key={paragraph} color="text.secondary" sx={{ maxWidth: 980 }}>
                {paragraph}
              </Typography>
            ))}
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {content.about.focusAreas.map((item) => (
                <CustomizedChip key={item} label={item} />
              ))}
            </Stack>
          </Stack>
        </Section>

        <Section boxId="experience" title={content.sections.experience} sx={{ mb: { xs: 7, md: 10 } }}>
          <Stack spacing={2}>
            <ProjectsTimeline experience={content.experience} />
          </Stack>
        </Section>

        <Section boxId="projects" title={content.sections.projects} sx={{ mb: { xs: 7, md: 10 } }}>
          <Grid container spacing={2.5}>
            {content.projects.map((project) => (
              <Grid key={project.title} size={{ xs: 12, md: 9 }}>
                <Card sx={{ height: '100%', borderLeft: '4px solid', borderLeftColor: 'secondary.main' }}>
                  <CardContent sx={{ p: { xs: 2.5, md: 3.5 }, '&:last-child': { pb: { xs: 2.5, md: 3.5 } } }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {project.outcome}
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2.5 }}>
                      {project.tech.map((item) => (
                        <CustomizedChip key={item} label={item} size="small" />
                      ))}
                    </Stack>
                    {project.link && (
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                        <Button variant="contained" href={project.link} target="_blank" rel="noreferrer">
                          {content.projectCtas.demo}
                        </Button>
                        <Button variant="outlined" href={project.link} target="_blank" rel="noreferrer">
                          {content.projectCtas.details}
                        </Button>
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section boxId="skills" title={content.sections.skills} sx={{ mb: { xs: 7, md: 10 } }}>
          <SkillsSwiper skillGroups={content.skillGroups} />
        </Section>

        <Section boxId="education" title={content.sections.education} sx={{ mb: { xs: 7, md: 10 } }}>
          <Grid container spacing={2.5}>
            {content.education.map((item) => (
              <Grid key={`${item.program}-${item.period}`} size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: { xs: 2.5, md: 3 }, height: '100%', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 18px 42px rgba(28, 43, 39, 0.1)' } }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.program}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {item.school}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>{item.period}</Typography>
                  {item.details && (
                    <Stack component="ul" spacing={1} sx={{ pl: 2.5, m: 0 }}>
                      {item.details.map((detail) => (
                        <Typography key={detail} component="li" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </Stack>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section boxId="languages" title={content.sections.languages} sx={{ mb: { xs: 7, md: 10 } }}>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {content.languages.map((language) => (
              <CustomizedChip key={language} label={language} />
            ))}
          </Stack>
        </Section>

        <Contact
          title={content.sections.contact}
          text={content.contact.text}
          boxId="contact"
          contacts={content.contact.links}
        />
        <Typography sx={{ mt: 5, pt: 3, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }} color="text.secondary" variant="body2">
          © {new Date().getFullYear()} {content.brand.copyrightName}. {content.footer.builtWith}
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
