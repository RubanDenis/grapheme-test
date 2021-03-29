import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Context from '../Context';

export default function FormStep2() {
    const formStep = useContext(Context)
    const submitStep2 = (e) => {
        let error = false
        e.preventDefault();//отменяем стандартную отправку формы
        for (let i = 0; i < e.target.length - 1; i++) {
            if (e.target[i].value === '') {
                e.target[i].classList.add('form__input_invalid');
                e.target[i].classList.remove('form__input_valid');
                error = true;
            } else {
                e.target[i].classList.remove('form__input_invalid');
                e.target[i].classList.add('form__input_valid');
            }
        }

        let regEx = /^[0-9]{20}$/;//регулярное выражение чтобы проверить номер карты (24 цифры)
        if (!regEx.test(Number(e.target.card_num.value))) {
            e.target.card_num.classList.add('form__input_invalid');
            e.target.card_num.classList.remove('form__input_valid');
            error = true;
        }

        regEx = /^[0-9]{2}[/]{1}[{1}[0-9]{2}$/;//регулярное выражение чтобы проверить срок карты (формат данных)
        if (!regEx.test(e.target.term.value)) {
            e.target.term.classList.add('form__input_invalid');
            e.target.term.classList.remove('form__input_valid');
            error = true;
        }

        if (!error) {
            formStep.setStep2(false);
            formStep.setStep3(true);
        }
    };

    return (
        <>
            <Container>
                <Form className='form' onSubmit={submitStep2}>
                    <div className='form__step'>
                        <span className='form__step-text'>Доставка</span>
                        <span className='form__step-text form__step-arrow'></span>
                        <span className='form__step-text form__step-text_active'>Оплата</span>
                    </div>

                    <span className='form__title'>Оплата</span>

                    <Form.Group className="form__input-container">
                        <Form.Label className='form__label'>Имя на карте</Form.Label>
                        <Form.Control className='form__input' type='text' placeholder='Konstantin Ivanov' name='card_name' />
                    </Form.Group>

                    <Form.Group className="form__input-container">
                        <Form.Label className='form__label'>Номер карты</Form.Label>
                        <Form.Control className='form__input' type='text' placeholder='XXXX XXXX XXXX XXXX XXXX' name='card_num' />
                    </Form.Group>

                    <div className='form__card-date'>
                        <Form.Group className="form__input-container form__card-term">
                            <Form.Label className='form__label'>Срок</Form.Label>
                            <Form.Control className='form__input' type='text' placeholder='MM / YY' name='term' />
                        </Form.Group>
                        <Form.Group className="form__input-container">
                            <Form.Label className='form__label'>CVV</Form.Label>
                            <Form.Control className='form__input' type='text' placeholder='' name='cw' />
                        </Form.Group>
                    </div>

                    <Button className='form__submit-btn' type='submit'>Оплатить</Button>
                </Form>
            </Container>
        </>
    )
}
