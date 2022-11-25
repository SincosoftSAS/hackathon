import { CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { CalendarMonth, TurnedIn, Edit } from '@mui/icons-material';

export const CardsSeguimientos = () => {
    return (

        <Card>
            <CardHeader title="Adriana Lucia Angarita Rodriguez" sx={{ paddingX: 3 }} titleTypographyProps={{ variant: 'body1', color: 'text.primary' }} />
            <CardContent>
                <Stack gap={1} direction={'row'} justifyContent="space-between" alignItems="center">
                    <Typography variant="caption">Paso 0</Typography>
                    <Chip label="Registrado"></Chip>
                </Stack>
                <Stack>
                    <Stack direction={'row'} alignItems="center">
                        <Stack direction={'column'}>
                            <TurnedIn fontSize='small'></TurnedIn>
                        </Stack>
                        <Stack direction={'column'} sx={{ margin: 0, marginLeft: 1 }}>
                            <Typography variant="caption">Actividad</Typography>
                            <Typography variant="body2">Registro de Correspondencia</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} alignItems="center">
                        <Stack direction={'column'}>
                            <CalendarMonth fontSize='small'></CalendarMonth>
                        </Stack>
                        <Stack direction={'column'} sx={{ margin: 0, marginLeft: 1 }}>
                            <Typography variant="caption">Fecha</Typography>
                            <Typography variant="body2">00:00 25/11/2022</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} alignItems="center">
                        <Stack direction={'column'}>
                            <Edit fontSize='small'></Edit>
                        </Stack>
                        <Stack direction={'column'} sx={{ margin: 0, marginLeft: 1 }}>
                            <Typography variant="caption">Observación</Typography>
                            <Typography variant="body2">Factura sin codigo de barras</Typography>
                        </Stack>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>

    )
}
