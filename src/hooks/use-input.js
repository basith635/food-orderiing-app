import { useState } from "react";
const useInput = (validateValue) => {
    const [enteredValue, setenteredValue] = useState('');
    const [isTouched, setisTouched] = useState(false);

    const valueisValid = validateValue(enteredValue);
    const hasError  = !valueisValid && isTouched; 
    
    const valueChangeHandler = (event) => {
        setenteredValue(event.target.value);
    }
    const inputBlurHandler = () => {
        setisTouched(true);
    };
    const reset = () => {
        setenteredValue('');
        setisTouched(false);
    } 
    return {
        value : enteredValue,
        isValid : valueisValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset

    }
};
export default useInput; 