import { combineReducers } from 'redux'
import loading from './loadingReducer';
import data from './dataReducer';

const rootReducer = combineReducers({loading, data})

export default rootReducer
