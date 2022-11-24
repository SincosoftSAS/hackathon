import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ItemCard = () => {
    return (
        <>
            <Card>
                <CardHeader
                    title="Acta de entrega Apto. 1705"
                    titleTypographyProps={{ variant: 'body1' }}
                />
                <CardContent sx={{paddingTop:0}}>
                    <Stack gap={1.5}>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Chip label='Confirmar recibido' />
                            <Stack
                                direction='row'
                                alignItems='center'
                                gap={1}
                            >
                                <TodayIcon
                                    fontSize='small'
                                />
                                <Box textAlign='center'>
                                    <Typography variant='caption'>Vencimiento:</Typography>
                                    <Typography variant='body2'>30/01/2022</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack>
                                <Stack direction='row'
                                    alignItems='center'
                                    justifyContent='space-between'>
                                    <Typography variant='caption'>
                                        Proveedor
                                        <Typography variant='body2' color='text.secondary'>
                                            800140949- CAFESALUD
                                        </Typography>
                                    </Typography >
                                    <Stack >
                                        <Button variant="outlined" size='medium' color='primary'> <KeyboardArrowDownIcon fontSize='medium' /></Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        
            {/* <Card>
                <CardHeader
                    title="Acta de entrega Apto. 1705"
                    titleTypographyProps={{ variant: 'body1' }}

                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Stack gap={1.5}>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'


                        >
                            <Chip label='Confirmar recibido' />
                            <Stack
                                direction='row'
                                alignItems='center'
                                gap={1}
                            >
                                <TodayIcon
                                    fontSize='small'
                                    color='error'
                                />
                                <Box>
                                    <Typography variant='caption'>Vencimiento:</Typography>
                                    <Typography variant='body2' color="error">30/01/2022</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack>
                                <Stack direction='row'
                                    alignItems='center'
                                    justifyContent='space-between'>
                                    <Typography variant='caption'>
                                        Proveedor
                                        <Typography variant='body2' color='text-secondary'>
                                            800140949- CAFESALUD
                                        </Typography>
                                    </Typography >
                                    <Stack gap={1}>
                                        <Button variant="outlined" size='medium' color='primary'> <KeyboardArrowDownIcon fontSize='medium' /></Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card> */}
        </>


    )
}

export default ItemCard