import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ ExerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb="33px">
        {name}
      </Typography>
    </Box>
  )
}

export default ExerciseVideos
