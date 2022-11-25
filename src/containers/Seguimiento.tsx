import { CalendarMonth, ChevronLeft, Edit, TurnedIn } from "@mui/icons-material";
import { AppBar, Card, CardContent, CardHeader, Chip, Divider, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { AppBarSinco } from "../components/AppBarSinco";
import { FabIconSeguimiento } from "../components/fabIconSeguimientos";
import { Navigator } from "../components/Navigator";
import { light } from "../theme/variables";

export const Seguimiento = () => {
    return (
        <>
            <Stack>
                <AppBarSinco />
                <Stack py={7}>
                    <Card sx={{ boxShadow: '0', px: 2 }} >
                        <CardHeader title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{ variant: 'body1' }} sx={{ pb: 0 }} />
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle2">Paso 0</Typography>
                                <Chip variant="filled" size="small" label="Registrado" />
                            </Stack>
                            <Stack gap={1}>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <TurnedIn fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Actividad</Typography>
                                        <Typography variant="body2" color="text.secondary">Registro de Correspondencia</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <CalendarMonth fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Fecha</Typography>
                                        <Typography variant="body2" color="text.secondary">00:00 30/01/2022</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <Edit fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Observaciones</Typography>
                                        <Typography variant="body2" color="text.secondary">Factura sin código de barras</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Divider />
                    <Card sx={{ boxShadow: '0', px: 2 }} >
                        <CardHeader title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{ variant: 'body1' }} sx={{ pb: 0 }} />
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle2">Paso 0</Typography>
                                <Chip variant="filled" size="small" label="Cancelado" color="otherRaitingActive" />
                            </Stack>
                            <Stack gap={1}>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <TurnedIn fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Actividad</Typography>
                                        <Typography variant="body2" color="text.secondary">Registro de Correspondencia</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <CalendarMonth fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Fecha</Typography>
                                        <Typography variant="body2" color="text.secondary">00:00 30/01/2022</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <Edit fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Observaciones</Typography>
                                        <Typography variant="body2" color="text.secondary">Factura sin código de barras</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Divider />
                    <Card sx={{ boxShadow: '0', px: 2 }} >
                        <CardHeader title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{ variant: 'body1' }} sx={{ pb: 0 }} />
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle2">Paso 0</Typography>
                                <Chip variant="filled" size="small" label="Rechazado" color="error" />
                            </Stack>
                            <Stack gap={1}>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <TurnedIn fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Actividad</Typography>
                                        <Typography variant="body2" color="text.secondary">Registro de Correspondencia</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <CalendarMonth fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Fecha</Typography>
                                        <Typography variant="body2" color="text.secondary">00:00 30/01/2022</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <Edit fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Observaciones</Typography>
                                        <Typography variant="body2" color="text.secondary">Factura sin código de barras</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Divider />
                    <Card sx={{ boxShadow: '0', px: 2 }} >
                        <CardHeader title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{ variant: 'body1' }} sx={{ pb: 0 }} />
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle2">Paso 0</Typography>
                                <Chip variant="filled" size="small" label="Reasignado" color="primary" />
                            </Stack>
                            <Stack gap={1}>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <TurnedIn fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Actividad</Typography>
                                        <Typography variant="body2" color="text.secondary">Registro de Correspondencia</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <CalendarMonth fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Fecha</Typography>
                                        <Typography variant="body2" color="text.secondary">00:00 30/01/2022</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <Edit fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Observaciones</Typography>
                                        <Typography variant="body2" color="text.secondary">Factura sin código de barras</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Divider />
                    <Card sx={{ boxShadow: '0', px: 2 }} >
                        <CardHeader title="Adriana Lucia Angarita Rodriguez" titleTypographyProps={{ variant: 'body1' }} />
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle2">Paso 0</Typography>
                                <Chip variant="filled" size="small" label="Completado" color="success" />
                            </Stack>
                            <Stack gap={1}>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <TurnedIn fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Actividad</Typography>
                                        <Typography variant="body2" color="text.secondary">Registro de Correspondencia</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <CalendarMonth fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Fecha</Typography>
                                        <Typography variant="body2" color="text.secondary">00:00 30/01/2022</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5}>
                                    <Edit fontSize="small" color="disabled" />
                                    <Stack>
                                        <Typography variant="caption">Observaciones</Typography>
                                        <Typography variant="body2" color="text.secondary">Factura sin código de barras</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>

                </Stack>
            </Stack>
            <Navigator />
            <FabIconSeguimiento />
        </>
    )
}