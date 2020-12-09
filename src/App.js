import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GlobalStyle } from './components/GlobalStyle';

import CenterContainer from './containers/CenterContainer';
import WeatherContainer from './containers/WeatherContainer';
import BookmarkContainer from './containers/BookmarkContainer';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <CenterContainer />
                <WeatherContainer />
                <BookmarkContainer handleToggle={this.props.handleToggle} />
            </>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        name: state.name.name
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleToggle: (target) => {
            document.getElementById(target).classList.toggle('on')
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);