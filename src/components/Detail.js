import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} Loading="Lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography>{name}</Typography>
        <Typography>
          Exercises will help maintain your strength.
          {name} bup is one of the best ecercises to target your abs. It will
          help you improve your mood and core strength.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail
