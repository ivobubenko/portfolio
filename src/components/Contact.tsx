import { Box, Typography, Stack, Button, Paper } from "@mui/material"

interface ContactInfo {
    title: string,
    variant?: any,
    link: string,
    target?: string,
    rel?: string

};
interface ContactPropsInterface {
    title: String,
    text: String,
    boxId: String,
    contacts: Array<ContactInfo>,
    boxComponent?: any,
};

function Contact({ title, text, contacts, boxId, boxComponent = "section" }: ContactPropsInterface) {
    return (<Box id={boxId} component={boxComponent} sx={{ mb: 2 }}>
        <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2.5 }}>
                {text}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                {contacts.map((contact: ContactInfo) => {
                    return <Button target={contact?.target ?? "_blank"} href={contact.link} variant={contact?.variant ?? "outlined"} rel={contact?.rel ?? "noreferrer"}>
                        {contact.title}
                    </Button>
                })
                }
            </Stack>
        </Paper>
    </Box >)
}

/*

                    <Button variant="contained" href="mailto:ivo.bubenko@example.com">}}
                    ivo.bubenko@example.com
                </Button>
                <Button variant="outlined" href="https://github.com" target="_blank" rel="noreferrer">
                    GitHub
                </Button>
                <Button variant="outlined" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                </Button>
                */
export default Contact