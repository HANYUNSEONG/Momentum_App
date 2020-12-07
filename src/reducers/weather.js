import * as types from '../actions/ActionTypes';

export const weather = (state = [], action) => {
    switch(action.type) {
        case types.WEATHER_GET:
            return {
                ...state,
                weather: action.data,
                status: action.status
            }

        default: return state;
    }
}

export default weather;