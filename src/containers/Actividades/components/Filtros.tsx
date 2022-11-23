import { ExpandMore } from '@mui/icons-material';
import { Chip, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

export const Filtros = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={1.5}
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
  );
};
