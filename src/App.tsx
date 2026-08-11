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
import SkillsGrid from './components/SkillsGrid';
import Certifications from './components/Certifications';
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
          ? 'radial-gradient(circle at 50% 0, rgba(42, 119, 108, 0.12), transparent 460px)'
          : 'linear-gradient(180deg, #f0f5f2 0, #f7f7f3 360px)',
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
      <Container maxWidth="lg" sx={{ py: { xs: 2.5, md: 4 } }}>
        <Banner profile={content.profile} ctas={content.heroCtas} />
        <Section boxId="projects" title={content.sections.projects}>
          <Grid container spacing={2}>
            {content.projects.map((project) => (
              <Grid key={project.title} size={12}>
                <Card
                  sx={{
                    height: '100%',
                    borderTop: '3px solid',
                    borderTopColor: 'secondary.main',
                    transition: 'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: (theme) => theme.palette.mode === 'dark'
                        ? '0 14px 32px rgba(0, 0, 0, 0.26)'
                        : '0 14px 32px rgba(28, 43, 39, 0.09)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 2.75 }, '&:last-child': { pb: { xs: 2, md: 2.75 } } }}>
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

        <Section boxId="experience" title={content.sections.experience}>
          <Stack spacing={1.5}>
            <ProjectsTimeline experience={content.experience} />
          </Stack>
        </Section>

        <Section boxId="skills" title={content.sections.skills}>
          <SkillsGrid skillGroups={content.skillGroups} />
        </Section>

        <Section boxId="certifications" title={content.sections.certifications}>
          <Certifications certifications={content.certifications} />
        </Section>

        <Section boxId="about" title={content.sections.about}>
          <Stack spacing={1.75}>
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

        <Section boxId="education" title={content.sections.education}>
          <Grid container spacing={2}>
            {content.education.map((item) => (
              <Grid key={`${item.program}-${item.period}`} size={{ xs: 12, md: 6 }}>
                <Paper sx={{
                  p: { xs: 2, md: 2.5 },
                  height: '100%',
                  transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: 'primary.main',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 12px 28px rgba(0, 0, 0, 0.24)'
                      : '0 12px 28px rgba(28, 43, 39, 0.08)',
                  },
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.program}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {item.school}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>{item.period}</Typography>
                  {item.details && (
                    <Stack component="ul" spacing={0.75} sx={{ pl: 2.5, m: 0 }}>
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

        <Section boxId="languages" title={content.sections.languages}>
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
        <Typography sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }} color="text.secondary" variant="body2">
          © {new Date().getFullYear()} {content.brand.copyrightName}. {content.footer.builtWith}
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
