const BASE_URL = `http://localhost:3001/api/timetables/get-times/`

const API_KEY = `${process.env.API_KEY}`

function getAllTimes(code) {
  return fetch (`${BASE_URL}${code}`)
    .then(res => res.json())
}

export {
  getAllTimes,
}