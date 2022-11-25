import { PersonOutline, WorkOutline } from "@mui/icons-material";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Actividad } from "../components/Actividad";
import PrimarySearchAppBar from "../components/Header";
import { Actividades } from "./Actividades";


export const Home = () => {
  const [tab, setTab] = useState(0);

  const tabs = [<Actividades />, <Actividades />];

  return (
    <>
      <Box width="100%" position="fixed" zIndex={1} >
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
      </Box>
      <Box pt={18}>
        {tabs[tab]}
        <Actividad />
        <Actividad />
        <Actividad />
        <Actividad />
        <Actividad />
        <Actividad />
        <Actividad />
        <Actividad />
      </Box>
    </>
  );
};
