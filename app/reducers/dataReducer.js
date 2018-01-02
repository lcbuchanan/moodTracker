import axios from 'axios';

/* -----------------    INITIAL STATE    ------------------ */

const initialState = [];

/* -----------------    ACTIONS     ------------------ */

const LOAD_TEMP_DATA = 'LOAD_TEMP_DATA';

const LOAD_CLOUD_DATA = 'LOAD_CLOUD_DATA';

const LOAD_MOOD_AVG = 'LOAD_MOOD_AVG'

/* ------------   ACTION CREATORS     ------------------ */


export const loadTempData = (data) => {
  const mappedData = data.map(entry => {
    return {
      x: +entry.temp,
      y: +entry.moodEntry.moodScore
    }
  })
  return {
    type: LOAD_TEMP_DATA,
    data: mappedData
  }
}

export const loadCloudData = (data) => {
  const mappedData = data.map(entry => {
    return {
      x: +entry.cloudCover,
      y: +entry.moodEntry.moodScore
    }
  })
  return {
    type: LOAD_CLOUD_DATA,
    data: mappedData
  }
}

export const loadMoodAvg = (avg) => {
  return {
    type: LOAD_MOOD_AVG,
    avg: +avg
  }
}

/* ------------       REDUCER     ------------------ */


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TEMP_DATA:
      return action.data;
    case LOAD_CLOUD_DATA:
      return action.data;
    case LOAD_MOOD_AVG:
      return action.avg;
    default: return state;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchTempData = () => dispatch => {
  axios.get('/api/mood/temp')
  .then(res => res.data)
  .then(data => dispatch(loadTempData(data)))
  .catch(err => console.error(err));
}

export const fetchCloudData = () => dispatch => {
  axios.get('/api/mood/clouds')
  .then(res => res.data)
  .then(data => dispatch(loadCloudData(data)))
  .catch(err => console.error(err));
}

export const fetchMoodAvg = () => dispatch => {
  axios.get('/api/mood/avg')
  .then(res => res.data)
  .then(avg => {
    console.log("AVERAGE: ", avg);
    dispatch(loadMoodAvg(avg))
  })
  .catch(err => console.error(err));
}
