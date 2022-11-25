

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function AppBarSeguimiento() {
  return (
    <Box >
      <AppBar position="fixed" >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <ChevronLeftIcon fontSize="small"/>
          </IconButton>
          <Typography variant="subtitle1" component="div">
          Acta de entrega Apto. 1705
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}