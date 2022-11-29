import { ExpandMore, PersonOutline, WorkOutline } from "@mui/icons-material";
import { Chip, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { Actividad } from "./Actividad";

export const Actividades = () => {

  const [tab, setTab] = useState(0);

  return (
    <>
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        width="100%"
      >
        <Stack direction="row" spacing={1}>
          <Chip label="Todas" variant="outlined" color="primary" />
          <Chip label="Vencidas" variant="outlined" color="primary" />
          <Chip label="Actuales" variant="outlined" color="primary" />
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="body2" color="text.primary">
            Filtrar
          </Typography>
          <IconButton color="default">
            <ExpandMore />
          </IconButton>
        </Stack>
      </Stack>

      {[1, 2, 3, 4, 5, 6, 7].map(() => {
        return (<Actividad></Actividad>)
      })}

    </>
  );
};
