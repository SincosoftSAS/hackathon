import { AttachFile, Create, Description, History } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';
import React from 'react'

const ButtonNav = () => {
    return (
        <Box>
            <Paper elevation={10}>
                <BottomNavigation
                    showLabels
                    value={0}
                >
                    <BottomNavigationAction label="Resumen" icon={<Description />} />
                    <BottomNavigationAction label="Adjuntos" icon={<AttachFile />} />
                    <BottomNavigationAction label="Editar" icon={<Create />} />
                    <BottomNavigationAction label="Segimiento" icon={<History />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );

}

export default ButtonNav