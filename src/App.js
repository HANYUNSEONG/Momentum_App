import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GlobalStyle } from './components/GlobalStyle';

import CenterContainer from './containers/CenterContainer';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <CenterContainer />
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