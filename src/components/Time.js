import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const TimeBox = styled.div`
    width: 100%;
    margin-top: .7rem;
    text-align: center;
`;

const TimeText = styled.p`
    font-size: 3.5rem;
    font-weight: 100;
    letter-spacing: 4px;
`;

class Time extends Component {
    state = {
        time: moment().format('HH:mm')
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: moment().format('HH:mm')
            })
        }, 1000)
    }
    
    render() {
        return (
            <TimeBox>
                <TimeText>
                    {
                        this.state.time
                    }
                </TimeText>
            </TimeBox>
        )
    }                                                                            
}

export default Time;