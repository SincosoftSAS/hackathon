import React from 'react'
import Card from '@mui/material/Card';
import { CardHeader, Chip, CardContent } from '@mui/material';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import { TurnedIn, Today, Edit } from '@mui/icons-material';

export default function Detalle() {
  return (
    <Card variant="outlined">
        <CardHeader title="Adriana Lucia Angarita Rodriguez" 
        titleTypographyProps={{variant: 'body1'}}>            
        </CardHeader>
        <CardContent>
            <Stack gap={1}>
                <Stack justifyContent="space-between" direction="row">                
                    <Typography variant="subtitle2">
                        Paso 0
                    </Typography>
                    <Chip variant="filled" label="Registrado" size="small"/>              
                </Stack>

                <Stack direction="column" gap={1}>
                    <Stack direction="row" alignItems="center" gap={1.5}>
                        <Stack direction="column">
                            <TurnedIn fontSize="small"/>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="caption">Actividad</Typography>
                            <Typography variant="body2">Registro de Correspondencia</Typography>
                        </Stack>             
                    </Stack>

                    <Stack direction="row" alignItems="center" gap={1.5}>
                        <Stack direction="column">
                            <Today/>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="caption">Fecha</Typography>
                            <Typography variant="body2">00:00 30/01/2022</Typography>
                        </Stack>             
                    </Stack>     

                    <Stack direction="row" alignItems="center" gap={1.5}>
                        <Stack direction="column">
                            <Edit fontSize="small"/>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="caption">Observaciones</Typography>
                            <Typography variant="body2">Factura sin código de barras</Typography>
                        </Stack>             
                    </Stack> 
                    
                </Stack>
            </Stack> 
        </CardContent>
    </Card>
  )
}
