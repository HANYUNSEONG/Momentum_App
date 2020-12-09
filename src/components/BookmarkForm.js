import React from 'react';
import { DefaultForm, DefaultInput, DefaultButton } from './GlobalStyle';

const SubmitBtn = {
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '.5rem'
}

const BookmarkForm = ({ handleSubmit }) => {
    let name = null, link = null;
    return (
        <DefaultForm onSubmit={(e) => {
            e.preventDefault();

            handleSubmit(name.value, link.value)

            name.value = '';
            link.value = '';
        }}>
            <DefaultInput placeholder="name" ref={(e) => name = e} />
            <DefaultInput placeholder="link" ref={(e) => link = e} />
            <DefaultButton style={SubmitBtn}>Submit</DefaultButton>
        </DefaultForm>
    )
}

export default BookmarkForm;