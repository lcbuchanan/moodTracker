import axios from 'axios';

/* -----------------    INITIAL STATE    ------------------ */
//state.campuses:

const initialState = false;

/* -----------------    ACTIONS     ------------------ */

const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
const SET_LOADING_FALSE = 'SET_LOADING_FALSE';


/* ------------   ACTION CREATORS     ------------------ */


export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE
  }
}

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE
  }
}

/* ------------       REDUCER     ------------------ */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return true;
    case SET_LOADING_FALSE:
      return false
    default: return state;
  }
}


/* ------------       DISPATCHERS     ------------------ */
