import axios from 'axios';
import * as types from './ActionTypes';
import { API_KEY } from '../config.js';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = (data, status) => {
    return {
        type: types.WEATHER_GET,
        data,
        status
    }
}

export const getWeatherData = (lat, lon) => {
    return (dispatch) => {
        return axios.get(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`)
        .then(result => {
            dispatch(getWeather(result, 'SUCCESS'))
        })
        .catch(err => {
            dispatch(getWeather(err, 'ERROR'))
        })
    }
}