import React from 'react';
import { FaSearch } from 'react-icons/fa'
import { FlexBox, DefaultInput } from './GlobalStyle';

const BoxStyle = {
    maxWidth: '400px',
    height: 'auto',
    margin: '0 auto',
    top: '1rem'
}

const IconStyle = {
    position: 'absolute'
}

const InputStyle = {
    padding: '0 0 .3rem 1.5rem',
    fontSize: '1rem'
}

const Search = () => {  
    const handleSubmit = (keyword) => {
        window.open(`https://www.google.com/search?q=${keyword}`);
    }
    return (
        <FlexBox style={BoxStyle}>
            <FaSearch style={IconStyle} />
            <DefaultInput placeholder="검색어" style={InputStyle} onKeyUp={(e) => e.keyCode === 13 && handleSubmit(e.target.value)} />
        </FlexBox>
    )
}

export default Search;