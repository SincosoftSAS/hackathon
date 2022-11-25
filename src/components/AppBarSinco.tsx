import { ChevronLeft } from "@mui/icons-material"
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material"

export const AppBarSinco = ()=>{
    return(
<AppBar position="fixed" gap={0.75} py={0.5} px={1.5}  sx={{ top:0, left:0,right:0}}>
<Toolbar>
    <Stack direction="row" alignItems="center" gap={2}>
        <IconButton color='inherit'>
            <ChevronLeft />
        </IconButton>
        <Typography variant='subtitle1'>
            Acta de entrega Apto. 1705
        </Typography>
    </Stack>
</Toolbar>
</AppBar>
    )
}