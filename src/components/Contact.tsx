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
                    return <Button key={`${contact.title}-${contact.link}`} target={contact?.target ?? "_blank"} href={contact.link} variant={contact?.variant ?? "outlined"} rel={contact?.rel ?? "noreferrer"}>
                        {contact.title}
                    </Button>
                })
                }
            </Stack>
        </Paper>
    </Box >)
}

export default Contact
