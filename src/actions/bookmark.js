import * as types from './ActionTypes';

export const setBookmark = (name, link) => {
    return {
        type: types.BOOKMARK_SET,
        name,
        link
    }
}