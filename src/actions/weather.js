import axios from 'axios';
import * as types from './ActionTypes';
import { API_KEY } from '../config.js';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = (data) => {
    return {
        type: types.WEATHER_GET,
        data
    }
}

export const getWeatherData = (lat, lon) => {
    return (dispatch) => {
        return axios.get(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(result => {
            dispatch(getWeather(result))
        })
        .catch(err => {
            dispatch(getWeather(err))
        })
    }
}