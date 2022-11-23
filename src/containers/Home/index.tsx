import { PersonOutline, WorkOutline } from '@mui/icons-material';
import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Actividades } from '../Actividades';
import Header from './components/Header';

export const Home = () => {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      label: 'Asignadas a mí',
      icon: <PersonOutline fontSize="small" />,
      component: <Actividades />,
    },
    {
      label: 'Para mi cargo',
      icon: <WorkOutline fontSize="small" />,
      component: <Actividades />,
    },
  ];

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box width="100%" position="fixed" zIndex={1}>
          <Header />
          <AppBar color="inherit" position="static">
            <Tabs
              component="nav"
              value={tab}
              variant="fullWidth"
              onChange={(event, newTab) => setTab(newTab)}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={`tab-${index}`}
                  label={tab.label}
                  iconPosition="start"
                  icon={tab.icon}
                />
              ))}
            </Tabs>
          </AppBar>
        </Box>
        <Box pt={18}>{tabs[tab].component}</Box>
      </Box>
    </>
  );
};
