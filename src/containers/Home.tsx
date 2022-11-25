import { PersonOutline, WorkOutline } from "@mui/icons-material";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CardActaEntrega from "../components/CardActaEntrega";
import PrimarySearchAppBar from "../components/Header";
import { Actividades } from "./Actividades";
import NavegationDescription from '../components/NavegationDescription';

export const Home = () => {
  const [tab, setTab] = useState(0);

  const tabs = [<Actividades />, <Actividades />];

  return (
    <>
      <PrimarySearchAppBar />
      <AppBar color="inherit" position="static">
        <Tabs
          value={tab}
          variant="fullWidth"
          onChange={(event, newTab) => setTab(newTab)}
        >
          <Tab
            label="Asignadas a mi"
            iconPosition="start"
            icon={<PersonOutline fontSize="small" />}
          />
          <Tab
            label="Para mi cargo"
            iconPosition="start"
            icon={<WorkOutline fontSize="small" />}
          />
        </Tabs>        
      </AppBar>      
      {tabs[tab]}
      <CardActaEntrega/>
      <CardActaEntrega/>
      <CardActaEntrega/>
    </>
  );
};
