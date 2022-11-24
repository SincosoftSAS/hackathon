import { ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

export const Actividades = () => {
  return (
    <Box display="flex" >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        width="100%"
        p={1.5}
      >
        <Stack direction="row" spacing={1}>
          <Chip label="Todas" variant="outlined" color="primary" />
          <Chip label="Vencidas" variant="outlined" color="primary" />
          <Chip label="Actuales" variant="outlined" color="primary" />
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Button color="primary" endIcon={<ExpandMore/>}>
              Filtrar                        
          </Button>

        </Stack>
      </Stack>
      <Box></Box>
    </Box>
  );
};
