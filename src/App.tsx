import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar from './layout/Navbar';
import Section from './components/Sections';
import Banner from './components/Banner';
import Contact from './components/Contact';

type Project = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
};

type Experience = {
  role: string;
  company: string;
  period: string;
  details: string;
};

const profile = {
  name: 'Ivo anynom',
  role: 'Full-Stack Developer',
  location: 'Kosice, Slovakia',
  summary:
    'I build scalable web apps and cloud-backed platforms focused on performance, reliability, and clean UX.',
};

const projects: Project[] = [
  {
    title: 'Cloud Cost Insights Dashboard',
    description:
      'Built a real-time dashboard that tracks AWS spend by service, team, and environment with anomaly detection alerts.',
    outcome: 'Reduced monthly cloud spend by 18% over two quarters.',
    tech: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Chart.js'],
  },
  {
    title: 'E-commerce Fulfillment API',
    description:
      'Designed a multi-tenant order orchestration API integrating payment, inventory, and shipping providers.',
    outcome: 'Cut average order processing time from 11 minutes to 2 minutes.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    title: 'Portfolio CMS Starter',
    description:
      'Created a reusable portfolio starter with editable sections, markdown content, and deployment pipelines.',
    outcome: 'Enabled new sites to launch in less than one day.',
    tech: ['Vite', 'React', 'MUI', 'GitHub Actions', 'S3 + CloudFront'],
  },
];

const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Northline Digital',
    period: '2023 - Present',
    details:
      'Leading frontend architecture, mentoring engineers, and owning performance budgets across three customer products.',
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Pixel Harbor',
    period: '2020 - 2023',
    details:
      'Implemented API and UI features for SaaS operations tooling used by 30+ enterprise clients.',
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2018 - 2020',
    details:
      'Delivered custom marketing and web app projects with responsive design, analytics, and CI/CD.',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Material UI', 'Vite', 'Testing Library'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'CloudFormation', 'Docker', 'GitHub Actions', 'Monitoring'],
  },
];

function App() {
  return (
    <Box sx={{ backgroundColor: '#f4f7fb', minHeight: '100vh' }}>
      <Navbar title={"IVO ANONYM"} />
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 9 } }}>
        <Banner profile={profile} />
        <Section boxId="about" title="About" sx={{ mb: { xs: 7, md: 10 } }}>
          <Typography color="text.secondary" sx={{ maxWidth: 920 }}>
            I specialize in building maintainable products where frontend quality and backend reliability matter equally.
            My recent work focuses on cloud-native services, observability, and fast, accessible interfaces for business
            workflows.
          </Typography>
        </Section>
        <Section boxId={"projects"} title={"Featured Projects"} sx={{ mb: { xs: 7, md: 10 } }}>
          <Grid container spacing={2.5}>
            {projects.map((project) => (
              <Grid key={project.title} size={{ xs: 12, md: 4 }}>
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
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                      {project.tech.map((item) => (
                        <Chip key={item} label={item} size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section boxId="experience" title="Experience" sx={{ mb: { xs: 7, md: 10 } }}>
          <Stack spacing={2}>
            {experience.map((item) => (
              <Paper key={`${item.company}-${item.role}`} sx={{ p: 3, borderRadius: 2.5 }}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', md: 'center' }}
                  spacing={1}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.role} - {item.company}
                  </Typography>
                  <Typography color="text.secondary">{item.period}</Typography>
                </Stack>
                <Divider sx={{ my: 1.5 }} />
                <Typography color="text.secondary">{item.details}</Typography>
              </Paper>
            ))}
          </Stack>
        </Section>

        <Section boxId="skills" title="Skills" sx={{ mb: { xs: 7, md: 10 } }}>
          <Grid container spacing={2.5}>
            {skillGroups.map((group) => (
              <Grid key={group.title} size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 3, borderRadius: 2.5, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    {group.title}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {group.items.map((item) => (
                      <Chip key={item} label={item} />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>
        <Contact title={"Contacts"} text={"I am open to full-time roles, freelance projects, and technical consulting."} boxId={"contact"}
          contacts={[{ title: "ivo.anynom@example.com", variant: "contained", link: "mailto:ivo.anynom@example.com", rel: " " },
          { title: "GitHub", link: "https://github.com" },
          { title: "LinkedIn", link: "https://linkedin.com" }
          ]}
        />
        <Typography sx={{ mt: 5, textAlign: 'center' }} color="text.secondary" variant="body2">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Material UI.
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
