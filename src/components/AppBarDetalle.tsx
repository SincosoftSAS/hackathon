import { ChevronLeft } from '@mui/icons-material'
import { AppBar, Stack, Typography } from '@mui/material'
import React from 'react'

export default function AppBarDetalle() {
  return (
    <AppBar position="fixed">
        <Stack direction="row" gap={2} paddingY={2} paddingX={1.5}>
            <ChevronLeft/>
            <Typography variant="subtitle1">
                Acta de entrega Apto. 1705
            </Typography>
        </Stack>
    </AppBar>
  )
}
