import React, { useState } from 'react'
import { Box } from '@mui/material'
import Footer from '../components/Footer'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Footer />
    </Box>
  )
}

export default Home
