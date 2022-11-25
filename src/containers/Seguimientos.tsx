import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DescriptionIcon from '@mui/icons-material/Description';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Seguimiento } from "../components/Seguimiento";
import { Actividades } from "./Actividades";



export const Seguimientos = () => {
  const [tab, setTab] = useState(0);

  const tabs = [<Actividades />, <Actividades />];

  return (
    <>
      <Box width="100%" position="fixed" zIndex={1}>
        <AppBar position="static" >
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
        <Seguimiento estado="registrado"></Seguimiento>
        <Seguimiento estado="cancelado" ></Seguimiento>
        <Seguimiento estado="completado"></Seguimiento>
        <Seguimiento estado="rechazado"></Seguimiento>
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<DescriptionIcon />} />
        </BottomNavigation>
      </Box>
      {/* bottom bar mnu */}

    </>
  );
};
