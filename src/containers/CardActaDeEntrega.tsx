import React, { Fragment } from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardHeader, Typography, Stack, Chip, Button, Divider } from '@mui/material';
import { KeyboardArrowDown, Today, ExpandMore } from '@mui/icons-material';

export default function CardActaDeEntrega(
    {
        fechaVencimiento, 
        colorCalendario
    }: 
    {
        fechaVencimiento: any, 
        colorCalendario: string
    }) {
  return (
    <>
    <Card variant='outlined'>
        <CardHeader 
            title ="Acta de entrega Apto. 1705" 
            titleTypographyProps={{ variant:'body1'}}
            sx={
                {
                   paddingX:"16px",
                   paddingY:"0px"
                }
            }>
       
        </CardHeader>
      <CardContent >
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Stack direction="column">
                    <Chip label="Confirmar recibido" />
                </Stack>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Stack direction="column" >
                        <Today></Today>
                    </Stack>
                    <Stack direction="column">
                        <Typography variant='caption'>
                            Vencimiento:
                        </Typography>
                            {fechaVencimiento}
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="column">
                        <Typography variant="caption" >Proveedor</Typography>
                        <Typography variant="body2" color="text.secondary">800140949- CAFESALUD</Typography>
                    </Stack>
                    <Stack direction="column">
                        <Button variant="outlined" size="small"><ExpandMore/></Button>
                    </Stack>
                </Stack>
      </CardContent>

     
    </Card>
    
    </>
  )
}
