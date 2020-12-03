import React from 'react';
import styled from 'styled-components';

const Name = styled.p`
    width: 100%;
    font-size: 1.8em;
    text-align: center;
`;

const NameView = ({ name }) => {
    return (
        <>
            <Name>Hello, <b>{name}</b></Name>
        </>
    )
}

export default NameView;