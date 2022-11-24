import { Today } from "@mui/icons-material/Today";
import { Box, Card, CardContent, CardHeader, Chip, Icon, Stack, Typography } from "@mui/material"

export const Tarjetas = () => {
    return (
        <>
            <Stack direction="column">
                <Card sx={{px:0.5, pt:1.5}}>
                    <CardHeader title="Acta de entrega Apto. 1705" />
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                        <Chip label="Confirmar recibido"/>
                        <Box display="flex" align-items="center" gap="1">
                            <Box>
                                
                                <TodayIcon  />
                            </Box>
                        </Box>

                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </>
    )
}

export default Tarjetas;