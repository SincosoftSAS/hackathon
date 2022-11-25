import React from 'react'
import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CreateIcon from '@mui/icons-material/Create';
import HistoryIcon from '@mui/icons-material/History';


const NavegationDescription = () => {
    const [value, setValue] = React.useState('Resumen');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
<BottomNavigation showLabels value={value} onChange={handleChange}>

        <BottomNavigationAction
          label="Resumen"
          value="Resumen"
          icon={<DescriptionIcon />}
        />
        <BottomNavigationAction
          label="Adjuntos"
          value="Adjuntos"
          icon={<AttachFileIcon />}
        />
        <BottomNavigationAction
          label="Editar"
          value="Editar"
          icon={<CreateIcon />}
        />
        <BottomNavigationAction
          label="Seguimiento"
          value="Seguimiento"
          icon={<HistoryIcon />}
        />        
      </BottomNavigation>
        </Paper>
      
    );
}

export default NavegationDescription