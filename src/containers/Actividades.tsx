import { ExpandMore, Today } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

export const Actividades = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        p={2}
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
      <Box>
        <Card>
          <CardHeader
            title="Acta de entrega Apto. 1705"
            titleTypographyProps={{ variant: 'body1' }}
          />
          <CardContent sx={{ py: 0 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Chip variant="filled" label="Confirmar recibido" />
              <Stack direction="row" gap={1} alignItems="center">
                <Today />
                <Stack alignItems="center">
                  <Typography variant="caption" component="div">
                    Vencimiento:
                  </Typography>
                  <Typography variant="body2" component="div">
                    30/10/2022
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
