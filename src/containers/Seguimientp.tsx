import { ChevronLeft, TurnedIn } from "@mui/icons-material";
import { AppBar, Card, CardContent, CardHeader, Chip, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export const Seguimiento = () => {
    return (
        <Stack>
        
            <AppBar position="static" gap={0.75} py={0.5} px={1.5} >
                <Toolbar>
                    <Stack direction="row" alignItems="center" gap={2}>
                        <IconButton color='inherit'>
                            <ChevronLeft />
                        </IconButton>
                        <Typography variant='subtitle1'>
                            Acta de entrega Apto. 1705
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack py={3}>
                <Card sx={{boxShadow:'0',px:2}} >
                    <CardHeader title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{variant:'body1'}}/>
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle2">Paso 0</Typography>
                            <Chip variant="filled" size="small" label="Registrado" />
                        </Stack>
                        <Stack>
                            <Stack direction="row" alignItems="center" gap={1.5}>
                                <TurnedIn fontSize="small" color="disabled" />
                                <Stack>
                                    <Typography>Actividad</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    )
}