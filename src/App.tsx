import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useEffect, useState } from 'react';
import CustomizedChip from './components/CustomizedChip';
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
    if (description) description.content = content.profile.summary;
  }, [content.profile.summary, language]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar
        title={content.brand.desktopTitle}
        mobileTitle={content.brand.mobileTitle}
        labels={content.nav}
        language={language}
        onLanguageChange={setLanguage}
        colorMode={colorMode}
        onColorModeChange={onColorModeChange}
      />
      <Container component="main" maxWidth="lg">
        <Banner profile={content.profile} ctas={content.heroCtas} />
        <Section boxId="experience" title={content.sections.experience}>
          <ProjectsTimeline experience={content.experience} />
        </Section>
        <Section boxId="skills" title={content.sections.skills}>
          <SkillsGrid skillGroups={content.skillGroups} />
        </Section>
        <Section boxId="certifications" title={content.sections.certifications}>
          <Certifications certifications={content.certifications} />
        </Section>
        <Section boxId="about" title={content.sections.about}>
          <Stack spacing={3}>
            {content.about.paragraphs.map((paragraph) => (
              <Typography key={paragraph} color="text.secondary" sx={{ maxWidth: '68ch' }}>{paragraph}</Typography>
            ))}
            <Box component="ul" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: '8px 32px', pl: 2, m: 0, color: 'text.secondary' }}>
              {content.about.focusAreas.map((item) => <Typography key={item} component="li" variant="body2">{item}</Typography>)}
            </Box>
          </Stack>
        </Section>
        <Section boxId="education" title={content.sections.education}>
          <Stack spacing={4} divider={<Box sx={{ borderTop: '1px solid', borderColor: 'divider' }} />}>
            {content.education.map((item) => (
              <Box component="article" key={`${item.program}-${item.period}`}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.period}</Typography>
                <Typography component="h3" variant="h6" sx={{ mb: 1 }}>{item.program}</Typography>
                <Typography color="text.secondary" sx={{ maxWidth: '65ch' }}>{item.school}</Typography>
                {item.details && (
                  <Stack component="ul" spacing={1} sx={{ pl: 2.5, mb: 0, mt: 2 }}>
                    {item.details.map((detail) => <Typography key={detail} component="li" variant="body2" color="text.secondary">{detail}</Typography>)}
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Section>
        <Section boxId="projects" title={content.sections.projects}>
          <Stack spacing={4}>
            {content.projects.map((project) => (
              <Box
                key={project.title}
                component="article"
                sx={{ minWidth: 0 }}
              >
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' }, gap: { xs: 3, sm: 4, lg: 6 }, mb: 4 }}>
                  <Box>
                    <Typography component="h3" variant="h3" sx={{ mb: 2 }}>{project.title}</Typography>
                    <Typography color="text.secondary">{project.description}</Typography>
                  </Box>
                  <Typography sx={{ maxWidth: '65ch' }}>{project.outcome}</Typography>
                </Box>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
                  {project.tech.map((item) => <CustomizedChip key={item} label={item} size="small" />)}
                </Stack>
                {project.link && (
                  <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Button variant="outlined" href={project.link} target="_blank" rel="noreferrer" endIcon={<ArrowOutwardIcon sx={{ fontSize: '16px !important' }} />}>
                      {content.projectCtas.demo}
                    </Button>
                    <Button variant="text" href={project.link} target="_blank" rel="noreferrer" sx={{ color: 'text.secondary' }}>
                      {content.projectCtas.details}
                    </Button>
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Section>
        <Section boxId="languages" title={content.sections.languages}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }} useFlexGap flexWrap="wrap">
            {content.languages.map((language) => <Typography key={language} color="text.secondary">{language}</Typography>)}
          </Stack>
        </Section>
        <Contact title={content.sections.contact} text={content.contact.text} boxId="contact" contacts={content.contact.links} />
      </Container>
      <Container component="footer" maxWidth="lg">
        <Typography sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }} color="text.secondary" variant="body2">
          © {new Date().getFullYear()} {content.brand.copyrightName}. {content.footer.builtWith}
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
