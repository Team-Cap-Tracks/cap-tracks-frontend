const BASE_URL = `https://api.wmata.com/Rail.svc/json/jStationTimes?=`



function getAllTimes(code) {
  return fetch (`${BASE_URL}${code}&api_key=b98a3faf5dad4504a8c99f11e4e196b0`)
    .then(res => res.json())
}

export {
  getAllTimes,
}