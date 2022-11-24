import { Button, CardContent, CardHeader, Chip, Icon, Paper, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import TodayIcon from '@mui/icons-material/Today';

export const CardComponent = () => {
  return (
    <Card>
      <CardHeader title="Acta de entrega Apto. 1705" titleTypographyProps={{ variant: 'body1' }} />
      <CardContent>
        <Stack direction={'row'} justifyContent="space-between">
          <Chip label="Confirmar recibido"></Chip>
          <Stack direction={'row'}>

            <Stack direction={'column'}>
              <TodayIcon fontSize='small'></TodayIcon>
            </Stack>
            <Stack direction={'column'}>
              <Paper>Vencimiento</Paper>
              <Paper>24/11/2022</Paper>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
