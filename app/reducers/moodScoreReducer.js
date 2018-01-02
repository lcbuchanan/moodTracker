/* -----------------    INITIAL STATE    ------------------ */

const initialState = 0;


/* -----------------    ACTIONS     ------------------ */

const SAVE_MOODSCORE_ON_STATE = 'SAVE_MOODSCORE_ON_STATE';

/* ------------   ACTION CREATORS     ------------------ */


export const saveMoodScoreOnState = moodScore => {
  return {
    type: SAVE_MOODSCORE_ON_STATE,
    moodScore
  }
}


/* ------------       REDUCER     ------------------ */


export default function reducer(state = initialState, action){
  switch (action.type) {
    case SAVE_MOODSCORE_ON_STATE:
      return action.moodScore;
    default: return state;
  }
}
