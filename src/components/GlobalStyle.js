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
        color: #000;
    }

    body {
        width: 100%;
        height: 100vh;
        background: url(${BackgroundImage}) center no-repeat;
        background-size: cover;
        color: #fff;
    }
`;

export const FlexBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

export const DefaultInput = styled.input`
    width: 100%;
    height: 3rem;
    padding: .5rem;
    outline: none;
    font-size: 1rem;
    border-radius: .3rem;
    border: none;
    color: #fff;

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