/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Form } from 'react-bootstrap';

export default function FormStep3() {
    return (
        <>
            <Container>
                <Form className='form'>
                    <div className='form__sent-msg'>
                        <img className='form__msg-img' src="https://img.icons8.com/ios/50/000000/ok--v1.png" />
                        <span className='form__msg-text'>Спасибо!</span>
                    </div>
                </Form>
            </Container>
        </>
    )
}
