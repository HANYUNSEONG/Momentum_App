import React from 'react';
import { FlexBox } from './GlobalStyle';
import BookmarkItem from './BookmarkItem';

const ListStyle = {
    overflow: 'hidden auto',
    height: '250px'
}

const BookmarkList = ({ bookmarks }) => {
    return (
        <FlexBox style={ListStyle}>
            {
                bookmarks && bookmarks.map((data, idx) =>
                    <BookmarkItem
                        key={idx}
                        {...data}
                    />
                )
            }
        </FlexBox>
    )
}

export default BookmarkList;