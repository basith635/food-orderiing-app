import React, { useContext, useState } from "react";
import styles from "../Cart/Cart.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";

const Cart = ( props ) =>
{
    const cartCtx = useContext( CartContext );
    const cartItemsAddHandler = item => { 
        cartCtx.addItem({
            ...item, amount: 1
        });
    };
    const cartItemsRemoveHadnler = id => { 
        cartCtx.removeItem(id);
    };
    const cartItems = <ul>
        {
            cartCtx.items.map( ( item ) =>
                <CartItem
                    key={ item.id }
                    id={ item.id }
                    name={ item.name }
                    amount={ item.amount }
                    price={ item.price }
                    onAddItem={ cartItemsAddHandler.bind( null, item ) }
                    onRemoveItem={ cartItemsRemoveHadnler.bind( null, item.id ) }
                />
            ) }
    </ul>;
    const totalAmount = `$${ cartCtx.totalAmount.toFixed( 2 ) }`;
    const hasItems = cartCtx.items.length > 0;
    return (
        <Modal onClose={ props.onClose }>
            { cartItems }
            <h2> Total Amount: { totalAmount }  </h2>
            <div className={ styles.actions }>
                <Button label="Close" onClick={ props.onClose } />
                { hasItems && <Button label="Order Now" /> }
            </div>
        </Modal>
    );
};
export default Cart;