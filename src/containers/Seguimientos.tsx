import { AttachFile, Create, History } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DescriptionIcon from '@mui/icons-material/Description';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, IconButton, Toolbar, Typography, Stack, Paper } from '@mui/material';
import { positions } from "@mui/system";
import { useState } from "react";
import { Seguimiento } from "../components/Seguimiento";
import { Actividades } from "./Actividades";
import { light } from '../theme/variables';
import React from "react";

export const Seguimientos = () => {
  const [tab, setTab] = useState(0);

  const tabs = [<Actividades />, <Actividades />];

  const [value, setValue] = React.useState(0);

  return (
    <>
      <Box width="100%">
        <AppBar position="fixed"  >
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
        <Seguimiento></Seguimiento>
        <Seguimiento></Seguimiento>
        <Seguimiento></Seguimiento>
        <Seguimiento></Seguimiento>
        <Seguimiento></Seguimiento>
        <Seguimiento></Seguimiento>
        <Paper sx={{position: 'fixed', bottom : 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation value={value} showLabels sx={{paddingX:3}} >
          <BottomNavigationAction label="Resumen" icon={<DescriptionIcon />} />
          <BottomNavigationAction label="Adjuntos" icon={<AttachFile />} />
          <BottomNavigationAction label="Editar" icon={<Create />} />
          <BottomNavigationAction label="Seguimiento" icon={<History />}  />
        </BottomNavigation>
        </Paper>
      </Box>
      {/* bottom bar mnu */}

    </>
  );
};
