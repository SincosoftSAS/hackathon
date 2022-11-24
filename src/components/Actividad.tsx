import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, CardContent, CardHeader, Chip, Stack } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Actividad = () => {
  return (
    <Card variant="elevation" sx={{ borderRadius: 0 }} >
      <CardHeader sx={{ paddingTop: 1.5, paddingX: 2.5 }} title="Acta de entrega Apto. 1705" titleTypographyProps={{ variant: 'body1' }}>
      </CardHeader>
      <CardContent>
        <Stack justifyContent="space-between" direction="row">
          <Chip variant="filled" label="Confirmar recibido" />
          <Stack direction="row" alignItems="center" gap={1}>
            <TodayIcon />
            <Stack direction="column" alignItems="center" justifyContent="space-between">
              <Typography variant="caption">Vencimiento:</Typography>
              <Typography variant="body1">30/01/2022</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack pt={2} direction="row" justifyContent="space-between">
          <Stack direction="column" alignItems="start">
            <Typography variant='body2' color='text.primary'>Proveedor</Typography>
            <Typography variant='body2'>800140949- CAFESALUD</Typography>
          </Stack>
          <Button variant="outlined">
            <ExpandMoreIcon />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
