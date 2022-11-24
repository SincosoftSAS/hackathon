import { Stack, Typography, Divider } from '@mui/material';
import CardActaDeEntrega from './CardActaDeEntrega';

export default function Cards() {
  return (
    <Stack  divider={<Divider orientation='horizontal' sx={{marginTop:"0"}}/>}>
        {
            
        }
        <CardActaDeEntrega colorCalendario="erro.main" fechaVencimiento= {
            <Typography variant='body2'>        
            30/11/2022                    
            </Typography>
        }></CardActaDeEntrega>


        <CardActaDeEntrega colorCalendario="error.main" fechaVencimiento= {
            <Typography variant='body2' color="error.main">        
            30/12/2023                    
            </Typography>
        }></CardActaDeEntrega>
    </Stack>
  )
}
