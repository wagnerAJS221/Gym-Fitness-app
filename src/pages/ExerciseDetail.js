import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const ExerciseDetail = () => {
  const { exerciseDetail, setExerciseDetail } = useState({})
  const { id } = useParams

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      )
      console.log({ exerciseDetailData })
      setExerciseDetail(exerciseDetailData)
    }
    fetchExerciseData()
  }, [id, setExerciseDetail])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
