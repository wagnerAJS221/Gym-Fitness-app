import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      )

      setBodyParts(['all', ...bodyPartsData])
    }
  })

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '33px'
          }
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '700px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: {
              lg: '175px',
              xs: '80px'
            },
            fontSize: {
              lg: '20px',
              xs: '14px'
            },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
