import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Context from '../Context';

export default function FormStep1() {
    const formStep = useContext(Context)
    const submitStep1 = e => {
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
        if (e.target.country.value === 'Страна') {
            e.target.country.classList.add('form__input_invalid');
            e.target.country.classList.remove('form__input_valid');
            error = true;
        }

        if (!error) {
            formStep.setStep1(false);
            formStep.setStep2(true);
        }
    };

    return (
        <>
            <Container>
                <Form className='form' onSubmit={submitStep1}>
                    <div className='form__step'>
                        <span className='form__step-text form__step-text_active'>Доставка</span>
                        <span className='form__step-text form__step-arrow'></span>
                        <span className='form__step-text'>Оплата</span>
                    </div>

                    <span className='form__title'>Информация для доставки</span>

                    <Form.Group className="form__input-container">
                        <Form.Label className='form__label'>Получатель</Form.Label>
                        <Form.Control className='form__input' type='text' placeholder='ФИО' name='name' />
                    </Form.Group>

                    <Form.Group className="form__input-container">
                        <Form.Label className='form__label'>Адрес</Form.Label>
                        <Form.Control className='form__input' type='text' placeholder='Город' name='city' />
                        <Form.Control className='form__input' type='text' placeholder='Адрес' name='address' />
                        <div className='form__city-input'>
                            <Form.Control className='form__input form__select-country' defaultValue="Страна" as="select" custom name='country'>
                                <option disabled hidden>Страна</option>
                                <option value='Россия'>Россия</option>
                                <option value='Украина'>Украина</option>
                                <option value='Беларусь'>Беларусь</option>
                            </Form.Control>
                            <Form.Control className='form__input form__input-index' type='text' placeholder='Индекс' name='index' />
                        </div>
                    </Form.Group>

                    <Button className='form__submit-btn' type='submit'>Продолжить</Button>
                </Form>
            </Container>
        </>
    )
}
