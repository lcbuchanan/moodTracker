import { combineReducers } from 'redux'
import loading from './loadingReducer';
import data from './dataReducer';
import moodScore from './moodScoreReducer';

const rootReducer = combineReducers({loading, data, moodScore})

export default rootReducer
