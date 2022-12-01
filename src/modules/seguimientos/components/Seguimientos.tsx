
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { BarraInferior } from "../../../layout/components/barra-inferior";
import { Acciones } from "./Acciones";
import { Seguimiento } from "./Seguimiento";

export const unidad_medida = () => {

  const f = 'didier';

  return (
    <>
      <Box width="100%">
        <AppBar position="sticky"  >
          <Toolbar>
            <IconButton color="inherit">
              <ChevronLeftIcon />
            </IconButton>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Acta de entrega Apto. 1705
            </Typography>
          </Toolbar>
        </AppBar>
        <Seguimiento estado="Registrado"></Seguimiento>
        <Seguimiento estado="Cancelado" ></Seguimiento>
        <Seguimiento estado="Completado"></Seguimiento>
        <Seguimiento estado="Rechazado" ></Seguimiento>
        <BarraInferior></BarraInferior>
        <Acciones></Acciones>
      </Box>
    </>
  );
};
