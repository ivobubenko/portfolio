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
import { useState } from 'react';
import Navbar from './layout/Navbar';
import Section from './components/Sections';
import Banner from './components/Banner';
import Contact from './components/Contact';
import { defaultLanguage, getPortfolioContent, type Language } from './i18n/portfolio';
import ProjectsTimeline from './components/ProjectsTimeline';
import SkillsSwiper from './components/SkillsSwiper';

function App() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const content = getPortfolioContent(language);

  return (
    <Box sx={{ backgroundColor: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar
        title={content.brand.desktopTitle}
        mobileTitle={content.brand.mobileTitle}
        labels={content.nav}
        language={language}
        onLanguageChange={setLanguage}
      />
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 9 } }}>
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
              <Grid key={project.title} size={{ xs: 12, md: 8 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
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
                <Paper sx={{ p: 3, borderRadius: 2.5, height: '100%' }}>
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
        <Typography sx={{ mt: 5, textAlign: 'center' }} color="text.secondary" variant="body2">
          © {new Date().getFullYear()} {content.brand.copyrightName}. {content.footer.builtWith}
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
