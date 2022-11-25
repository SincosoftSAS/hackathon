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
            <Typography component="div" variant="body1">
              Paso 0
            </Typography>
            <Chip variant="filled" label="Registrado" />
          </Stack>
          <DetalleSeguimiento icono="tag"></DetalleSeguimiento>
          <DetalleSeguimiento icono="calendario"></DetalleSeguimiento>
          <DetalleSeguimiento icono="editar"></DetalleSeguimiento>
        </CardContent>
      </Card>
      <Divider></Divider>
    </>
  );
};
