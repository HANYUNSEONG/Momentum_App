import React from 'react';
import styled from 'styled-components';

import { FaArrowRight } from 'react-icons/fa';

import { FlexBox, DefaultInput, DefaultButton, DefaultForm } from './GlobalStyle';

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 100;
    margin-bottom: .7rem;
`;

const NextButtonStyle = {
    width: '50px',
    height: '50px',
    position: 'absolute',
    right: '0',
    top: '5px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '2rem'
}

const inputStyle = {
    backgroundColor: 'transparent',
    borderBottom: '2px solid #fff',
    fontSize: '1.2rem'
}

const NameInputWrap = ({ handleSetName }) => {
    let target;
    return (
        <FlexBox>
            <DefaultForm onSubmit={(e) => {
                e.preventDefault();
                if(target.value === "") return false;
                handleSetName(target.value);
            }}>
                <Title>What's your name?</Title>
                <DefaultInput id="name" placeholder="NAME" style={inputStyle} ref={(e) => target = e} />
                <DefaultButton type="submit" style={NextButtonStyle}><FaArrowRight /></DefaultButton>
            </DefaultForm>
        </FlexBox>
    )
}

export default NameInputWrap;