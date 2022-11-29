import PrimarySearchAppBar from "../components/Header";
import { Actividades } from "../modules/Actividades/components/Actividades";


export const Home = () => {

  return (
    <>
      <PrimarySearchAppBar />
      <Actividades />
    </>
  );
};
