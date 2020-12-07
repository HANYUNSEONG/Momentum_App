import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getWeatherData } from '../actions/weather';
import Weather from '../components/Weather';

const WeatherBox = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;

class WeatherContainer extends Component {
    componentDidMount() {
        // 위치 정보 얻는 거
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((e) => {
                this.props.handleGet(e.coords.latitude, e.coords.longitude)
            })
        }
    }
    render() {
        return (
            <WeatherBox>
                {
                    // weather 데이터 받아오고 status가 성공일 때만 weather 컴포넌트 리턴함 두 가지 중에 하나라도 실패 시 로딩 텍스트 리턴
                    this.props.weather && this.props.status === 'SUCCESS'
                    ? <Weather weather={this.props.weather} />
                    : 'Loading...'
                }
            </WeatherBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.weather, // 날씨 정보
        status: state.weather.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGet: (lat, lon) => {
            dispatch(getWeatherData(lat, lon))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);