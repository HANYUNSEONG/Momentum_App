import * as types from '../actions/ActionTypes';

const name = (state = [], action) => {
    switch (action.type) {
        case types.NAME_SET:
            return {
                name: action.name
            }

        default: return state;
    }
}

export default name;