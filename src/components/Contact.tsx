import { Box, Typography, Stack, Button, Paper } from "@mui/material"
import type { ButtonProps } from "@mui/material/Button";
import type { ElementType } from "react";

interface ContactInfo {
    title: string,
    variant?: ButtonProps["variant"],
    link: string,
    target?: string,
    rel?: string

};
interface ContactPropsInterface {
    title: string,
    text: string,
    boxId: string,
    contacts: Array<ContactInfo>,
    boxComponent?: ElementType,
};

function Contact({ title, text, contacts, boxId, boxComponent = "section" }: ContactPropsInterface) {
    return (<Box id={boxId} component={boxComponent} sx={{ mb: 2, scrollMarginTop: 92 }}>
        <Paper sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 1, color: '#fff', bgcolor: '#153b37', borderColor: '#153b37', boxShadow: '0 20px 48px rgba(21, 59, 55, 0.18)', position: 'relative', overflow: 'hidden', backgroundImage: 'repeating-linear-gradient(90deg, rgba(99, 211, 200, 0.055) 0 1px, transparent 1px 44px), repeating-linear-gradient(0deg, rgba(99, 211, 200, 0.055) 0 1px, transparent 1px 44px)', '&::after': { content: '""', position: 'absolute', top: 14, right: 14, width: 28, height: 28, borderTop: '2px solid rgba(99, 211, 200, 0.65)', borderRight: '2px solid rgba(99, 211, 200, 0.65)' }, '& > *': { position: 'relative', zIndex: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {title}
            </Typography>
            <Typography sx={{ mb: 2.5, maxWidth: 760, color: '#c7dad6' }}>
                {text}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                {contacts.map((contact: ContactInfo) => {
                    return <Button
                        key={`${contact.title}-${contact.link}`}
                        target={contact?.target ?? "_blank"}
                        href={contact.link}
                        variant={contact?.variant ?? "outlined"}
                        rel={contact?.rel ?? "noreferrer"}
                        sx={{
                            color: '#fff',
                            borderColor: 'rgba(255,255,255,.55)',
                            ...(contact.variant === 'contained' && { bgcolor: 'secondary.main', borderColor: 'secondary.main' }),
                            '&:hover': {
                                borderColor: '#fff',
                                bgcolor: contact.variant === 'contained' ? 'secondary.dark' : 'rgba(255,255,255,.08)',
                            },
                        }}
                    >
                        {contact.title}
                    </Button>
                })
                }
            </Stack>
        </Paper>
    </Box >)
}

export default Contact
