import AppBarDetalle from '../components/AppBarDetalle';
import CardDetalle from './CardDetalle';
import { Chip, Divider, Fab, SpeedDial, SpeedDialIcon } from '@mui/material';
import { Send } from '@mui/icons-material';
import FooterDetalle from '../components/FooterDetalle';

export default function Detalle() {
  return (
    <>

    <AppBarDetalle/>

    <CardDetalle 
        Estado={
            <Chip  variant="filled" label="Registrado" size="small"/>
        }             
    />

    <CardDetalle 
        Estado={<Chip color='primary' sx={{
            backgroundColor:"warning.other"
        }} variant="filled" label="Cancelado" size="small"/>}             
    />

    <CardDetalle 
        Estado={<Chip color='primary' sx={{
            backgroundColor:"error.main"
        }} variant="filled" label="Rechazado" size="small"/>}             
    />  

    <SpeedDial
        ariaLabel="Enviar"
        sx={{ position: 'fixed', bottom: 97, right: 24 }}
        icon={
            <Fab color='primary'>
                <Send />
            </Fab>
        }
        >
            
    </SpeedDial>
    <FooterDetalle></FooterDetalle>
    </>
  )
}
