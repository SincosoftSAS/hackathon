import { PersonOutline, WorkOutline } from "@mui/icons-material";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";

export const BarraAcciones = () => {

  const [tab, setTab] = useState(0);
  return (
    <>
      <AppBar color="inherit">
        <Toolbar />
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
      <Toolbar />
    </>
  )
}
