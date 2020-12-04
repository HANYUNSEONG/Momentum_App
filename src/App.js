import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GlobalStyle } from './components/GlobalStyle';

import CenterContainer from './containers/CenterContainer';
import WeatherContainer from './containers/WeatherContainer';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <CenterContainer />
                <WeatherContainer />
            </>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        name: state.name.name
    }
}

export default connect(mapStatetoProps)(App);