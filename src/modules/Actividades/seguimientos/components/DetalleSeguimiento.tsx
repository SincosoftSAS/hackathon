import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { Stack, Typography } from '@mui/material';
import { light } from '../../../../theme/variables';

type TipoIcono = "calendario" | "tag" | "editar";

interface DetalleSeguimientoProps {
  icono: TipoIcono,
  titulo: string,
  descripcion: string
}

const estilosIconos: Record<string, string> = { fontSize: 'small', color: 'disabled' }

export const DetalleSeguimiento = ({ icono, titulo, descripcion }: DetalleSeguimientoProps) => {

  const Iconos = {
    calendario: <CalendarMonthIcon  {...estilosIconos} />,
    editar: <EditIcon {...estilosIconos} />,
    tag: <TurnedInIcon  {...estilosIconos} />
  }

  return (
    <Stack direction="row" gap={2} alignItems="center">
      {Iconos[icono]}
      <Stack justifyContent="space-between" >
        <Typography variant="caption" color={light.palette?.text?.primary}>{titulo}</Typography>
        <Typography variant="body2" color={light.palette?.text?.secondary}>{descripcion}</Typography>
      </Stack>
    </Stack>
  )
}
