import React from 'react';
import styles from '../Cart/CartItem.module.css';
const CartItem = props => {
    return (
        <li className={styles['cart-items']}>
            <div>
                <h2> { props.name} </h2>
                <div className={styles.summary}>
                    <span className={styles.price}> { props.price} </span>
                    <span className={styles.amount}> X {props.amount}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={props.onAddItem}> Add </button>
                    <button onClick={props.onRemoveItem}> Remove </button>
                </div>
            </div>
        </li>
    );
};
export default CartItem;