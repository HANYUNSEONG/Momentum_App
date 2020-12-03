import * as types from './ActionTypes';

export const setName = (name) => {
    return {
        type: types.NAME_SET,
        name
    }
}