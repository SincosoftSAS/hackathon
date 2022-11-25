import { ExpandMore, Today } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardHeader, Chip, Divider, Icon, IconButton, Stack, Typography } from "@mui/material"

export const Tarjetas = () => {
    return (
        <>
            <Stack direction="column">
                <Card sx={{ px: 0.5, pt: 1.5 , boxShadow:'none'}}>
                    <CardHeader sx={{ px: 2, py: 0 }} title="Acta de entrega Apto. 1705" titleTypographyProps={{ variant: "body1"}} />
                
                    <CardContent sx={{ px: 2, py: 1}}>
                        <Stack gap={1.5}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1.5}>
                                <Chip label="Confirmar recibido" variant="filled" />
                                <Stack direction="row" align-items="center" gap={1}>
                                    <Stack alignItems="center" direction="row">
                                        <Today fontSize="small"/>
                                    </Stack>
                                    <Stack alignItems="center">
                                        <Box>
                                            <Typography variant="caption">Vencimiento:</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2">30/01/2022</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>

                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack>
                                    <Typography variant="caption">Proveedor</Typography>
                                    <Typography variant="body2" color="text.secondary">800140949-CAFESALUD</Typography>
                                </Stack>
                                <Button variant="outlined">
                                    <ExpandMore/>
                                </Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
                <Divider />
                <Card sx={{ px: 0.5, pt: 1.5 }}>
                    <CardHeader sx={{ px: 2, py: 0 }} title="Acta de entrega Apto. 1705" titleTypographyProps={{ variant: "body1"}} />
                    <CardContent sx={{ px: 2, py: 1}}>
                        <Stack gap={1.5}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1.5}>
                                <Chip label="Confirmar recibido" variant="filled" />
                                <Stack direction="row" align-items="center" gap={1}>
                                    <Stack alignItems="center" direction="row">
                                        <Today color="error" fontSize="small"/>
                                    </Stack>
                                    <Stack alignItems="center">
                                        <Box>
                                            <Typography variant="caption">Vencimiento:</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" color="error">30/01/2022</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack>
                                    <Typography variant="caption">Proveedor</Typography>
                                    <Typography variant="body2" color="text.secondary">800140949-CAFESALUD</Typography>
                                </Stack>
                                <Button variant="outlined"><ExpandMore/></Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
                <Divider />
            </Stack>
        </>
    )
}

export default Tarjetas;