import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    width: 100%;
    padding: .6rem 0;
`;

const BookmarkItem = ({ name, link }) => {
    return (
        <Item>
            <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </Item>
    )
}

export default BookmarkItem;