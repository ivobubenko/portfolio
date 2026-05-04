import Chip from '@mui/material/Chip';
import { Stack } from '@mui/material';
import type { ChipProps } from '@mui/material/Chip';

type CustomizedChipProps = ChipProps;

function CustomizedChip({ sx, ...props }: CustomizedChipProps) {
    return (<Stack direction="row" spacing={1}>
        <Chip {...props} color="primary" variant="outlined" sx={sx} />
    </Stack>
    );
}

export default CustomizedChip;
