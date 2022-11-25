import React from 'react'
import { Backdrop, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import RepeatIcon from '@mui/icons-material/Repeat';
import CheckIcon from '@mui/icons-material/Check';

const actions = [
    { icon: <CloseIcon />, name: 'Rechazar' },
    { icon: <NotInterestedIcon />, name: 'Cancelar' },
    { icon: <RepeatIcon />, name: 'Reasignar' },
    { icon: <CheckIcon />, name: 'Completar' },
  ];
const EnviarSpeedDial = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
    //   <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed' }}>
    <>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'fixed', bottom: 99, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
        </>
    //   </Box>
    );  
}

export default EnviarSpeedDial