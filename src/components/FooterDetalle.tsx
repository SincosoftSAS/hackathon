import { AttachFile, Create, Description, History } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'

export default function FooterDetalle() {
  return (
    
    <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingY:1.5}}>
        <BottomNavigationAction showLabel={true}  label="Resumen" icon={<Description />}  />
        <BottomNavigationAction showLabel={true} label="Adjuntos" icon={<AttachFile />} />
        <BottomNavigationAction showLabel={true} label="Editar" icon={<Create />} />
        <BottomNavigationAction showLabel={true} label="Seguimiento" icon={<History />}/>
    </BottomNavigation>
  )
}
