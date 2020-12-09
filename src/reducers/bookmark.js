import * as types from '../actions/ActionTypes';

// 초기 bookmarks를 빈 배열로 선언
const initialState = {
    bookmarks: []
}

const bookmark = (state = initialState, action) => {
    switch(action.type) {
        case types.BOOKMARK_SET:
            const item = {
                "name" : action.name,
                "link" : action.link
            }
            
            const tmp = state.bookmarks.concat(item);
            
            return {
                ...state,
                bookmarks: tmp
            }

        default: return state;
    }
}

export default bookmark;