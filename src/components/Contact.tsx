import { Typography, Stack, Button } from '@mui/material';
import type { ButtonProps } from '@mui/material/Button';
import type { ElementType } from 'react';
import Section from './Sections';

interface ContactInfo {
    title: string;
    variant?: ButtonProps['variant'];
    link: string;
    target?: string;
    rel?: string;
}
interface ContactProps {
    title: string;
    text: string;
    boxId: string;
    contacts: ContactInfo[];
    boxComponent?: ElementType;
}

function Contact({ title, text, contacts, boxId, boxComponent = 'section' }: ContactProps) {
    return (
        <Section title={title} boxId={boxId} boxComponent={boxComponent}>
            <Typography sx={{ maxWidth: '55ch', mb: 4, fontSize: { xs: '1.125rem', sm: '1.25rem' }, lineHeight: 1.7 }}>{text}</Typography>
            <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                {contacts.map((contact) => (
                    <Button
                        key={`${contact.title}-${contact.link}`}
                        target={contact.target ?? '_blank'}
                        href={contact.link}
                        variant={contact.variant ?? 'text'}
                        rel={contact.rel ?? 'noreferrer'}
                        sx={contact.variant !== 'contained' ? { color: 'text.secondary' } : undefined}
                    >
                        {contact.title}
                    </Button>
                ))}
            </Stack>
        </Section>
    );
}

export default Contact;
