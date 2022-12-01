import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

const actions = [
  { icon: <CloseIcon />, name: 'Rechazar' },
  { icon: <NotInterestedIcon />, name: 'Cancelar' },
  { icon: <RepeatIcon />, name: 'Reasignar' },
  { icon: <CheckIcon />, name: 'Completar' },
];

export const Acciones = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 99, right: 24, width: '65px' }}
        icon={<SendIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        color="primary"
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
  )
}
