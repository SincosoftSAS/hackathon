import { AttachFile, Create, Description, History } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction, Paper, Stack } from "@mui/material"

export const Navigator = ()=>{
    return(
        <Paper elevation={3} sx={{position:'fixed', bottom:0, left:0,right:0}}>
        <Stack>
            <BottomNavigation value="seguimiento" showLabels >
            <BottomNavigationAction  label="Resumen" value="resumen" icon={<Description/>}/>
            <BottomNavigationAction  label="Adjuntos" value="adjuntos" icon={<AttachFile/>}/>
            <BottomNavigationAction label="Editar" value="editar" icon={<Create/>}/>
            <BottomNavigationAction  label="Seguimiento" value="seguimiento" icon={<History/>}/>
            </BottomNavigation>
        </Stack>
        </Paper>
    )
}