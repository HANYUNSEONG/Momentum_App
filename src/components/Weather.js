import React from 'react';
import styled from 'styled-components';
import { FlexBox } from './GlobalStyle';

const Info = styled.p`
    width: 100%;
    font-size: 1.3rem;
    font-weight: 100;
    text-align: center;
`;

const Weather = ({ weather }) => {
    return (
        <FlexBox>
            <Info style={{fontSize: '1.5rem'}}>{weather.data.weather[0].description}</Info>
            <Info>
                {Math.floor(weather.data.main.temp)} °
            </Info>
        </FlexBox>
    )
}

export default Weather;