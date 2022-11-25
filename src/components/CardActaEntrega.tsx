import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
} from "@mui/material";

import TodayIcon from "@mui/icons-material/Today";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { Divider } from '@mui/material';

const CardActaEntrega = () => {
  return (
    <Card elevation={0}>
      <CardHeader
        title="Acta de entrega Apto. 1705"
        titleTypographyProps={{ variant: "body1" }}
      />
      <CardContent sx={{ px: "2", py: "0" }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Chip label="Confirmar Recibido" />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
          >
            <TodayIcon />
            <Stack direction="column" alignItems="center" textAlign="center">
              <Typography variant="caption">Vencimiento:</Typography>
              <Typography variant="body2">30/01/2022</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={1.5} mb={1}>
          <Stack direction="column">
            <Typography variant="caption">Proveedor</Typography>
            <Typography
              variant="body2"
              color="secundary.light"
              textTransform="uppercase"
            >
              800140949- CAFESALUD
            </Typography>
          </Stack>
          <Button
            variant="outlined"  >
            <ExpandMoreIcon fontSize="small"/>
          </Button>
        </Stack>
      </CardContent>
      <Divider/>
    </Card>
    
  );
};

export default CardActaEntrega;
