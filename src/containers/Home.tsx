import { PersonOutline, WorkOutline } from "@mui/icons-material";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { CardComponent } from "../components/CardComponent";
import { CardsSeguimientos } from "../components/CardsSeguimientos";
import PrimarySearchAppBar from "../components/Header";
import PrimarySearchAppBarSeguimiento from "../components/HeaderSeguimiento";
import { Actividades } from "./Actividades";

export const Home = () => {
  const [tab, setTab] = useState(0);

  const tabs = [<Actividades />, <Actividades />];

  return (
    <>
      {/* <PrimarySearchAppBar /> */}
      {/* <AppBar color="inherit" position="static">
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
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/> */}
      <PrimarySearchAppBarSeguimiento />
      <CardsSeguimientos/>
    </>
  );
};
