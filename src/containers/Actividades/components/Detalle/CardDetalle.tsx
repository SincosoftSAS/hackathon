import { Box, Card, CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

export const CardDetalle = () => {
  return (
    <Box mt={3}>
        <Card>
            <CardHeader
                title='Adriana Lucia Angarita Rodiriguez'
                titleTypographyProps={{ variant: 'body1' }}
                letterSpacing = {0.15}
                color='text.primary'
            >
            </CardHeader>
            <Box>
                <CardContent>
                    <Stack flexDirection='row'>
                        <Typography color='text.primary' variant='subtitle2'>
                            Caso 0
                        </Typography>
                        <Chip label='Registrado'/>
                    </Stack>
                </CardContent>
            </Box>
                
        </Card>
    </Box>
  )
}
