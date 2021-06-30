import React from 'react';
import styles from '../Cart/CartItem.module.css';
import Button from '../UI/Button';
const CartItem = props => {
    return (
        <li>
            <div className={styles['cart-items']}>
                <div className={styles.name}>
                    <h3> {props.name} </h3>
                </div>
                <div className={styles.summary}>
                    <span className={styles.price}> {props.price} </span>
                    X <span className={styles.amount}> {props.amount}</span>
                </div>
                <div className={styles.actions}>
                    <Button onClick={props.onAddItem} label='+' />
                    <Button onClick={props.onRemoveItem} label='-' />
                </div>
            </div>
        </li>
    );
};
export default CartItem;