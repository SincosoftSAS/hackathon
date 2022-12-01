import { Box, Container } from "@mui/material"
import { Actividades } from "../../modules/Actividades/components/Actividades"
import { BarraAcciones } from "./barra-acciones"
import BarraPrincipal from "./barra-principal"

export const Layout = () => {
  return (
    <>
      <BarraAcciones></BarraAcciones>
      <BarraPrincipal></BarraPrincipal>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Actividades ></Actividades>
        </Box>
      </Container>
    </>
  )
}
