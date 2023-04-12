export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '7a0c11a3c2msh56dfb5ad6d37be1p13d363jsndd322d306ca0'
  }
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}
// process.env.REACT_APP_RAPID_API_KEY
