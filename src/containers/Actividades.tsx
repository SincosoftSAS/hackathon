import { ExpandMore } from "@mui/icons-material";
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
    <Box display="flex" p={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        width="100%"
      >
        <Stack direction="row" spacing={1}>
          <Chip label="Todas" variant="outlined" color="primary" />
          <Chip label="Vencidas" variant="outlined" color="primary" />
          <Chip label="Actuales" variant="outlined" color="primary" />
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="body2" color="text.primary">
            Filtrar
          </Typography>
          <IconButton color="default">
            <ExpandMore />
          </IconButton>
        </Stack>
      </Stack>
      <Box></Box>
    </Box>
  );
};
