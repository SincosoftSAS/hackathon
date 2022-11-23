import { Divider, Stack } from '@mui/material';
import { Actividad } from './Actividad';

interface TypeActividad {
  id: string;
  nombre: string;
  fechVencimiento: Date;
  estado: string;
  proveedorNombre: string;
  proveedorNit: string;
}

interface ListaActividadesProps {
  actividades: TypeActividad[];
}

export const ListaActividades = ({ actividades }: ListaActividadesProps) => {
  return (
    <Stack divider={<Divider />}>
      {actividades?.map((actividad, index) => (
        <Actividad key={index} />
      ))}
    </Stack>
  );
};
