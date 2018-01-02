import axios from 'axios';

/* -----------------    INITIAL STATE    ------------------ */

const initialState = [];

/* -----------------    ACTIONS     ------------------ */

const LOAD_TEMP_DATA = 'LOAD_TEMP_DATA';

const LOAD_CLOUD_DATA = 'LOAD_CLOUD_DATA';

const LOAD_PRESSURE_DATA = 'LOAD_PRESSURE_DATA';

const LOAD_MOOD_AVG = 'LOAD_MOOD_AVG';

const LOAD_MONTH_DATA = 'LOAD_MONTH_DATA';

const LOAD_HOUR_DATA = 'LOAD_HOUR_DATA';

const LOAD_DAY_DATA = 'LOAD_DAY_DATA';

/* ------------   ACTION CREATORS     ------------------ */


export const loadTempData = (data) => {
  console.log("DATA: ", data)
  const mappedData = data.map(entry => {
    console.log("entry: ", entry.temp)

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

export const loadPressureData = (data) => {
  const mappedData = data.map(entry => {
    return {
      x: +entry.pressure,
      y: +entry.moodEntry.moodScore
    }
  })
  return {
    type: LOAD_PRESSURE_DATA,
    data: mappedData
  }
}

export const loadMoodAvg = (avg) => {
  return {
    type: LOAD_MOOD_AVG,
    avg: +avg
  }
}

export const loadMonthData = (data) => {
  const mappedData = data.map(entry => {
    // const year = entry.createdAt.slice(0, 4);
    // const month = entry.createdAt.slice(5, 7);
    const dayOfMonth = entry.createdAt.slice(8, 10);
    return {
      x: +dayOfMonth,
      y: +entry.moodScore
    }
  })
  return {
    type: LOAD_MONTH_DATA,
    data: mappedData
  }
}

export const loadHourData = (data) => {
  const mappedData = data.map(entry => {
    // const year = entry.createdAt.slice(0, 4);
    // const month = entry.createdAt.slice(5, 7);
    // const dayOfMonth = entry.createdAt.slice(8, 10);
    const hourOfDay = entry.createdAt.slice(11, 13);
    return {
      x: +hourOfDay,
      y: +entry.moodScore
    }
  })
  return {
    type: LOAD_HOUR_DATA,
    data: mappedData
  }
}

export const loadDayData = (data) => {
  const mappedData = data.map(entry => {
    // const dayNameArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
      x: +entry.day,
      y: +entry.moodScore
    }
  })
  return {
    type: LOAD_DAY_DATA,
    data: mappedData
  }
}

/* ------------       REDUCER     ------------------ */


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TEMP_DATA:
      return action.data;
    case LOAD_CLOUD_DATA:
      return action.data;
    case LOAD_PRESSURE_DATA:
      return action.data;
    case LOAD_MOOD_AVG:
      return action.avg;
    case LOAD_MONTH_DATA:
      return action.data;
    case LOAD_HOUR_DATA:
      return action.data;
    case LOAD_DAY_DATA:
      return action.data;
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

export const fetchPressureData = () => dispatch => {
  axios.get('/api/mood/pressure')
  .then(res => res.data)
  .then(data => dispatch(loadPressureData(data)))
  .catch(err => console.error(err));
}

export const fetchMoodAvg = () => dispatch => {
  axios.get('/api/mood/avg')
  .then(res => res.data)
  .then(avg => {
    dispatch(loadMoodAvg(avg))
  })
  .catch(err => console.error(err));
}

export const fetchMonthData = () => dispatch => {
  axios.get('/api/mood/time')
  .then(res => res.data)
  .then(data => dispatch(loadMonthData(data)))
  .catch(err => console.error(err));
}

export const fetchHourData = () => dispatch => {
  axios.get('/api/mood/time')
  .then(res => res.data)
  .then(data => dispatch(loadHourData(data)))
  .catch(err => console.error(err));
}

export const fetchDayData = () => dispatch => {
  axios.get('/api/mood/day')
  .then(res => res.data)
  .then(data => dispatch(loadDayData(data)))
  .catch(err => console.error(err))
}
