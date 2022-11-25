import React from "react";
import AppBarSeguimiento from "../components/AppBarSeguimiento";
import EnviarSpeedDial from "../components/EnviarSpeedDial";
import NavegationDescription from "../components/NavegationDescription";
import Seguimiento from "./Seguimiento";

const Detalles = () => {
  return (
    <>
      <AppBarSeguimiento/>
      <Seguimiento />
      <Seguimiento />
      <Seguimiento />  
      <Seguimiento />     
      <EnviarSpeedDial />
      <NavegationDescription />
    </>
  );
};

export default Detalles;
