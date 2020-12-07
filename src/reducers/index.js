import { combineReducers } from 'redux';

import name from './name';
import weather from './weather';

export const rootReducer = combineReducers({
    name,
    weather
})