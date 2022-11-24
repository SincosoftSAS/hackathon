import { ExpandMore, Today } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

export const Actividad = () => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardHeader
        title="Acta de entrega Apto. 1705"
        sx={{ paddingTop: 1.5, paddingX: 2.5, paddingBottom: 0 }}
        titleTypographyProps={{ variant: 'body1' }}
      />
      <CardContent sx={{ paddingY: 1, paddingX: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Chip variant="filled" label="Confirmar recibido" />
          <Stack direction="row" alignItems="center" gap={1}>
            <Today fontSize="small" />
            <Box display="flex" flexDirection="column">
              <Typography variant="caption" textAlign="center">
                Vencimiento:
              </Typography>
              <Typography variant="body2" textAlign="center">
                30/01/2022
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Stack>
            <Typography variant="caption">Proveedor:</Typography>
            <Typography variant="body2" color="text.secondary">
              800140949 - CAFESALUD
            </Typography>
          </Stack>
          <Button variant="outlined" size="medium">
            <ExpandMore fontSize="small" />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
