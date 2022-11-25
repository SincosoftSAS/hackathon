import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ paddingX: 1.5, paddingY: 0.5 }}>
        <Stack gap={2} direction='row' alignItems='center'>
          <IconButton
            color="inherit"
            sx={{ padding: 1.5 }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="subtitle1" letterSpacing={0.15}>
            Acta de entrega Apto. 1705
          </Typography>
        </Stack>
      </Toolbar>

    </AppBar>

  )
}

export default NavBar