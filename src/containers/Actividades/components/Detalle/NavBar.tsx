import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const NavBar = () => {
  return (
      <AppBar position="static">
        <Toolbar sx={{paddingX: 1.5, paddingY:0.5}}>
          <IconButton
            size="medium"
            color="inherit"
            sx={{padding:1.5}}
          >
            <ChevronLeftIcon fontSize='medium'/>
          </IconButton>
          <Typography variant="subtitle1" letterSpacing={0.15}  component="div" ml={1.5} >
            Acta de entrega Apto. 1705
          </Typography>
        </Toolbar>
      </AppBar>
   
  )
}

export default NavBar