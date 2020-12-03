import React, { Component } from 'react';
import styled from 'styled-components';

const TimeBox = styled.div`
    width: 100%;
    margin-top: 1rem;
    text-align: center;
`;

const TimeText = styled.p`
    font-size: 1.2rem;
    font-weight: 100;
`;

class Time extends Component {
    timeSet = () => {
        let date = new Date();
    }
    render() {
        return (
            <TimeBox>
                <TimeText>
                    {
                        
                    }
                </TimeText>
            </TimeBox>
        )
    }
}

export default Time;