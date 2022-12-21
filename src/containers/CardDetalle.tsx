import { CalendarMonth, Edit, TurnedIn } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material'

export default function CardDetalle(
    {
        Estado
    }:
    {
        Estado:any
    }
) {
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
                    {Estado}
                </Stack>

                <Stack direction="column" gap={1}>
                    <Stack direction="row" alignItems="center" gap={1.5}>
                        <Stack direction="column">
                            <TurnedIn fontSize="small" color="disabled"/>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="caption">Actividad</Typography>
                            <Typography variant="body2" color="text.secondary">Registro de Correspondencia</Typography>
                        </Stack>             
                    </Stack>

                    <Stack direction="row" alignItems="center" gap={1.5}>
                        <Stack direction="column">
                            <CalendarMonth color="disabled"/>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="caption">Fecha</Typography>
                            <Typography variant="body2" color="text.secondary">00:00 30/01/2022</Typography>
                        </Stack>             
                    </Stack>     

                    <Stack direction="row" alignItems="center" gap={1.5}>
                        <Stack direction="column">
                            <Edit fontSize="small" color="disabled"/>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="caption">Observaciones</Typography>
                            <Typography variant="body2" color="text.secondary">Factura sin código de barras</Typography>
                        </Stack>             
                    </Stack> 

                </Stack>
            </Stack> 
        </CardContent>
    </Card>
  )
}
