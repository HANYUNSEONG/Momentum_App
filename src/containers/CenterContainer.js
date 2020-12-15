import React, { Component } from 'react';
import { connect } from 'react-redux';

import NameInputWrap from '../components/NameInputWrap';
import NameView from '../components/NameView';
import Time from '../components/Time';
import Search from '../components/Search';

import styled from 'styled-components';

import { setName } from '../actions/name';

const NameWrap = styled.div`
    max-width: 600px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
`;

class CenterContainer extends Component {
    render() {
        const { handleSetName, name } = this.props;
        // 초기 상태 => name 값이 없으면 name 입력하는 form component을 리턴함
        if(name === undefined) return <NameWrap><NameInputWrap handleSetName={handleSetName} /></NameWrap>
        else {
            return (
                <NameWrap>
                    <NameView name={name} />
                    <Time />
                    <Search />
                </NameWrap>
            )
        }
    }
}

const mapStatetoProps = (state) => {
    return {
        name: state.name.name
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleSetName : (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(CenterContainer);