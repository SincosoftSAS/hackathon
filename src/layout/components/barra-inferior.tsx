import { AttachFile, Create, History } from "@mui/icons-material";
import DescriptionIcon from '@mui/icons-material/Description';
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";

export const BarraInferior = () => {

  const [value, setValue] = useState(3);

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }} showLabels sx={{ height: "73px", paddingX: 3, fontSize: "12px" }} >
          <BottomNavigationAction label="Resumen" icon={<DescriptionIcon />} />
          <BottomNavigationAction label="Adjuntos" icon={<AttachFile />} />
          <BottomNavigationAction label="Editar" icon={<Create />} />
          <BottomNavigationAction label="Seguimiento" icon={<History />} />
        </BottomNavigation>
      </Paper>
    </>
  )
}
