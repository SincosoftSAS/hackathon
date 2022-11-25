import { Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DetalleSeguimiento } from "./DetalleSeguimiento";

export const Seguimiento = () => {
  return (
    <>
      <Card elevation={0}>
        <CardHeader
          sx={{ paddingTop: 2, paddingX: 3 }}
          title="Adriana Lucia Angarita Rodriguez"
          titleTypographyProps={{ variant: "body1" }}
        ></CardHeader>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography component="div" variant="subtitle2">
              Paso 0
            </Typography>
            <Chip variant="filled" label="Registrado" />
          </Stack>
          <Stack gap={1}>
            <DetalleSeguimiento icono="tag" titulo="Actividad" descripcion="Registro de Correspondencia"></DetalleSeguimiento>
            <DetalleSeguimiento icono="calendario" titulo="Fecha" descripcion="00:00 30/01/2022"></DetalleSeguimiento>
            <DetalleSeguimiento icono="editar" titulo="Observaciones" descripcion="Factura sin código de barras"></DetalleSeguimiento>
          </Stack>
        </CardContent>
      </Card>
      <Divider></Divider>
    </>
  );
};
