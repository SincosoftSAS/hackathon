import React from 'react'
import {Card, CardHeader, Typography, Stack, Chip, Divider} from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';

const Seguimiento = () => {
  return (
    <>
    <Card elevation={0}>
        <CardHeader title="Adriana Lucia Angarita Rodríguez" titleTypographyProps={{variant:"body1", px: 1}} />
        <Stack px={3} py={1.5}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle2">Paso 0</Typography>
                <Chip variant="filled" label="Registrado"   />
            </Stack>
            <Stack direction="column" spacing={1}>
                
                <Stack direction="row" gap={1.5} justifyContent="flex-start" alignItems="center">
                    <TurnedInIcon color="disabled"/>
                    <Stack direction="column" >
                        <Typography variant="caption">Actividad</Typography>
                        <Typography  variant="body2">Registro de Correspondencia</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                    <CalendarMonthIcon sx={{mr:2}} color="disabled"/>
                    <Stack direction="column" >
                        <Typography variant="caption">Fecha</Typography>
                        <Typography  variant="body2">00:00 30/01/2022</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                    <EditIcon sx={{mr:2}} color="disabled"/>
                    <Stack direction="column" >
                        <Typography variant="caption">Observaciones</Typography>
                        <Typography   variant="body2">Factura sin código de barras</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Card>
    <Divider/>
    {/* card 2 */}
    <Card elevation={0}>
        <CardHeader title="Adriana Lucia Angarita Rodríguez" titleTypographyProps={{variant:"body1", px: 1}} />
        <Stack px={3} py={1.5}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle2">Paso 0</Typography>
                <Chip label="Registrado" color="warning"  />
            </Stack>
            <Stack direction="column" spacing={1}>
                
                <Stack direction="row" gap={1.5} justifyContent="flex-start" alignItems="center">
                    <TurnedInIcon color="disabled"/>
                    <Stack direction="column" >
                        <Typography variant="caption">Actividad</Typography>
                        <Typography  variant="body2">Registro de Correspondencia</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                    <CalendarMonthIcon sx={{mr:2}} color="disabled"/>
                    <Stack direction="column" >
                        <Typography variant="caption">Fecha</Typography>
                        <Typography  variant="body2">00:00 30/01/2022</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                    <EditIcon sx={{mr:2}} color="disabled"/>
                    <Stack direction="column" >
                        <Typography variant="caption">Observaciones</Typography>
                        <Typography   variant="body2">Factura sin código de barras</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Card>
    <Divider/>
    </>
  )
}

export default Seguimiento