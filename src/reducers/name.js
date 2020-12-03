import * as types from '../actions/ActionTypes';

export const name = (state = [], action) => {
    switch (action.type) {
        case types.NAME_SET:
            return {
                name: action.name
            }

        case types.NAME_GET:
            return state;

        default: return state;
    }
}

export default name;