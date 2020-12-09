import { combineReducers } from 'redux';

import name from './name';
import weather from './weather';
import bookmark from './bookmark';

export const rootReducer = combineReducers({
    name,
    weather,
    bookmark
})