import { Button, CardContent, CardHeader, Chip, Paper, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import {Today, ExpandMore} from '@mui/icons-material';

export const CardComponent = () => {
  return (
    <Card>
      <CardHeader title="Acta de entrega Apto. 1705" titleTypographyProps={{ variant: 'body1' }} sx={{ paddingX:2, paddingY:0, marginTop: 1.189}} />
      <CardContent sx={{paddingX: 2, paddingY: 1}}>
        <Stack direction={'row'} justifyContent="space-between" alignItems="center" sx={{marginY:0}}>
          <Chip label="Confirmar recibido"></Chip>
          <Stack direction={'row'} alignItems="center">
            <Stack direction={'column'}>
              <Today fontSize='small'></Today>
            </Stack>
            <Stack direction={'column'} sx={{ margin: 0, marginLeft: 1 }}>
              <Typography variant="caption">Vencimiento</Typography>
              <Typography variant="body2">24/11/2022</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={'row'} justifyContent="space-between" sx={{paddingY:1}}>
          <Stack direction={'column'} sx={{ margin:  0 }}>
            <Typography variant="caption">Proveedor</Typography>
            <Typography variant="body2" sx={{color: "rgba(16, 24, 64, 0.6)"}}>800140949-CAFESALUD</Typography>
          </Stack>
          <Stack direction={'column'} sx={{ margin: 0, marginLeft: 1 }}>
            <Button variant='outlined' size="medium">
              <ExpandMore fontSize='small' />
            </Button>
          </Stack>  
        </Stack>
      </CardContent>
    </Card>
    
  )
}
