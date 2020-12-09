import styled, { createGlobalStyle } from 'styled-components';

import BackgroundImage from '../asset/images/back.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nanum Gothic', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: #fff;
    }

    body {
        width: 100%;
        height: 100vh;
        background: url(${BackgroundImage}) center no-repeat;
        background-size: cover;
        color: #fff;
    }

    ::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #666;
    }
`;

export const FlexBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: ${props => props.isPadding && '.5rem'}
`;

export const DefaultComponent = styled.div`
    background-color: #333;
    padding: 1rem;
    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    & > form, & > div {
        display: none
    }
    &.on {
        max-width: ${props => props.maxWidth}px !important;
        height: 400px !important;
    }
    &.on > form, &.on > div {
        display: block;
    }
`;

export const DefaultInput = styled.input`
    width: 100%;
    height: 1.5rem;
    outline: none;
    font-size: .8rem;
    border-radius: .3rem;
    border: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    background-color: transparent;

    &::placeholder {
        color: #ccc;
    }
`;

export const DefaultButton = styled.button`
    border: none;
    outline: none;
`;

export const DefaultForm = styled.form`
    width: 100%;
`;