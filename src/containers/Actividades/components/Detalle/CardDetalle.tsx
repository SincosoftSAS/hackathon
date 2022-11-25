import { Box, Card, CardContent, CardHeader, Chip, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { CalendarMonth, Edit } from '@mui/icons-material';

export const CardDetalle = () => {
    return (
        <Box>
            <Card>
                <Box gap={1.5}>


                    <CardHeader
                        title='Adriana Lucia Angarita Rodiriguez'
                        titleTypographyProps={{ variant: 'body1' }}
                        letterSpacing={0.15}
                        color='text.primary'
                    >
                    </CardHeader>

                    <CardContent sx={{
                        paddingTop: 0
                    }}>
                        <Stack flexDirection='row' justifyContent='space-between'>
                            <Typography color='text.primary' variant='subtitle2'>
                                Paso 0
                            </Typography>
                            <Chip size='small' label='Registrado' />
                        </Stack>
                        <Stack gap={2}>

                            <Stack>
                                <Stack direction='row' alignItems='center' gap={1.5} p={0}>
                                    <TurnedInIcon color='disabled' />
                                    <Stack direction='column'>
                                        <Typography variant='caption' letterSpacing={0.4} color='text.primary'>Actividad</Typography>
                                        <Typography variant='body2' letterSpacing={0.17} color='text.secondary' >Registro de correspondencia</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>


                            <Stack>
                                <Stack direction='row' alignItems='center' gap={1.5} p={0}>
                                    <CalendarMonth color='disabled' />
                                    <Stack direction='column'>
                                        <Typography variant='caption' letterSpacing={0.4}>Fecha</Typography>
                                        <Typography variant='body2' letterSpacing={0.17} color='text.secondary' >00:00 30/01/2022</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack>
                                <Stack direction='row' alignItems='center' gap={1.5} p={0}>
                                    <Edit color='disabled' />
                                    <Stack direction='column'>
                                        <Typography variant='caption' letterSpacing={0.4}>Observaciones</Typography>
                                        <Typography variant='body2' letterSpacing={0.17} color='text.secondary' >Factura sin código de barras</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>

                    </CardContent>

                </Box>
            </Card>
        </Box>
    )
}
