import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef() ;
    const [amountIsValid, setAmountIsValid] = useState(true);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const updateAmount = amountInputRef.current.value;
        const updateAmountToNumber  = +updateAmount;
        if(updateAmount.trim().length === 0 || updateAmount < 1 || updateAmount > 5) {
            setAmountIsValid(false);
            return; 
        }
        props.onAddToCart(updateAmountToNumber);
    };
    return <form onSubmit={onSubmitHandler}>
        <Input 
            ref={amountInputRef}
            label='Amount' 
            input={{
                id : 'amount',
                type : 'number',
                defaultValue: 1
            }} 
        />
        { !amountIsValid && <p>Please enter a valid amount (1-5)</p> }
      <Button label="Add"/>  
    </form>
};
export default MealItemForm;