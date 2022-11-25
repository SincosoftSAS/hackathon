
type Icon = "calendario" | "tag" | "editar";

interface DetalleSeguimientoProps {
  icono: Icon
}

export const DetalleSeguimiento = ({ icono }: DetalleSeguimientoProps) => {

  return (

    //     {< TurnedInIcon />}
    // { <CalendarMonthIcon /> }
    // { <EditIcon /> }

    <div>{icono}</div>
  )
}
