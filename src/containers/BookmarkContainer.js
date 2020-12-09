import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaBookmark } from 'react-icons/fa'

import BookmarkList from '../components/BookmarkList';
import BookmarkForm from '../components/BookmarkForm';

import { DefaultComponent } from '../components/GlobalStyle';

import { setBookmark } from '../actions/bookmark';

const BookmarkBox = {
    position: 'absolute',
    left: '10px',
    top: '10px',
    maxWidth:'50px',
    width: '100%',
    height: '50px',
    backgroundColor:' #222',
    padding: '1rem'
}

class BookmarkContainer extends Component {
    render() {
        return (
            <DefaultComponent maxWidth={300} height={400} id="bookmark" style={BookmarkBox}>
                <FaBookmark onClick={() => this.props.handleToggle('bookmark')} />
                <BookmarkForm handleSubmit={this.props.handleSubmit} />
                <BookmarkList bookmarks={this.props.bookmarks} />
            </DefaultComponent>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        bookmarks: state.bookmark.bookmarks
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleSubmit: (name, link) => {
            dispatch(setBookmark(name, link))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BookmarkContainer);