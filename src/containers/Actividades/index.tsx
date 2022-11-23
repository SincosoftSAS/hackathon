import { Box, Divider, Stack } from '@mui/material';
import { Filtros } from './components/Filtros';
import { Actividad } from './components/Actividad';
import { ListaActividades } from './components/ListaActividades';

export const Actividades = () => (
  <Box display="flex" flexDirection="column" gap={1.5}>
    <Filtros />
    <ListaActividades actividades={[...new Array(8)]} />
  </Box>
);
