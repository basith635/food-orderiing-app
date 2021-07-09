import React from 'react';
import useInput from '../../hooks/use-input';
import styles from '../Cart/Checkout.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';
const Checkout = (props) => {
    let formIsValid = false;
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredlastName,
        isValid: enteredlastNameIsValid,
        hasError: lastnameInputHasError,
        valueChangeHandler: lastnameChangeHandler,
        inputBlurHandler: lastnameBlurHandler,
        reset: resetlastName
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: cityInputHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredPostal,
        isValid: enteredPostalIsValid,
        hasError: postalInputHasError,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        reset: resetPostal
    } = useInput(value => value.trim().length === 6);

    const nameClassHelper = nameInputHasError ? `${styles['form-control']} invalid` : styles['form-control'];
    const lastnameClassHelper = lastnameInputHasError ? `${styles['form-control']} invalid` : styles['form-control'];
    const cityClassHelper = cityInputHasError ? `${styles['form-control']} invalid` : styles['form-control'];
    const postalClassHelper = cityInputHasError ? `${styles['form-control']} invalid` : styles['form-control'];
    
    if (enteredNameIsValid && enteredlastNameIsValid && enteredCityIsValid && enteredPostalIsValid) {
        formIsValid = true;
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        resetName('');
        resetlastName('');
        resetCity('');
        resetPostal('');
        props.onFinalCheckoutHandler({
            name : `${enteredName} ${enteredlastName}`,
            city : enteredCity,
            post : enteredPostal
        });
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className={nameClassHelper}>
                <Input
                    label='First Name'
                    input={{
                        id: 'firstName',
                        type: 'text',
                        value: enteredName,
                        onChange: nameChangeHandler,
                        onBlur: nameBlurHandler
                    }} />
                {nameInputHasError && <p className={styles.invalid}>Please enter a valid first name </p>}
            </div>
            <div className={lastnameClassHelper}>
                <label htmlFor='lastName'> Last Name </label>
                <input
                    type="text"
                    id='lastName'
                    value={enteredlastName}
                    onChange={lastnameChangeHandler}
                    onBlur={lastnameBlurHandler}
                />
                {lastnameInputHasError && <p className={styles.invalid}>Please enter a valid last name </p>}
            </div>
            <div className={cityClassHelper}>
                <label htmlFor='city'> Place/City </label>
                <input
                    type="text"
                    id='city'
                    value={enteredCity}
                    onChange={cityChangeHandler}
                    onBlur={cityBlurHandler}
                />
                {cityInputHasError && <p className={styles.invalid}>Please enter a valid city </p>}
            </div>
            <div className={postalClassHelper}>
                <label htmlFor='postal'> Post Code </label>
                <input
                    type="number"
                    id='postal'
                    value={enteredPostal}
                    onChange={postalCodeChangeHandler}
                    onBlur={postalCodeBlurHandler}
                />
                {postalInputHasError && <p className={styles.invalid}>Please enter a valid postal code  - (6 chars)</p>}
            </div>
            <div className={styles.actions}>
                <Button type='button' label='Cancel' onClick={props.onCheckoutFormClose}></Button>
                {formIsValid && <Button type='' label='Checkout Now'></Button>}
            </div>
        </form>
    );
};
export default Checkout;