import { Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { light } from "../../../theme/variables";
import { EstadoSeguimiento } from "../types/estado-seguimiento-tipo";
import { DetalleSeguimiento } from "./DetalleSeguimiento";






const estados: Record<EstadoSeguimiento, Record<string, string>> = {
  Registrado: { label: "Registrado", color: "primary" },
  Cancelado: { label: "Cancelado", color: "warning" },
  Rechazado: { label: "Rechazado", color: "error" },
  Completado: { label: "Completado", color: "success" },
}

interface SeguimientoProps {
  estado: EstadoSeguimiento
}

export const Seguimiento = ({ estado }: SeguimientoProps) => {
  return (
    <>
      <Card elevation={0}>
        <CardHeader
          sx={{ paddingTop: 2, paddingBottom: 1.5, paddingX: 3 }}
          title="Adriana Lucia Angarita Rodriguez"
          titleTypographyProps={{ variant: "body1" }}
        ></CardHeader>
        <CardContent sx={{ paddingTop: 0, paddingBottom: 2, paddingX: 3 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography component="div" variant="subtitle2" color={light.palette?.text?.primary}>
              Paso 0
            </Typography>
            <Chip variant="filled" {...estados[estado]} />
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
