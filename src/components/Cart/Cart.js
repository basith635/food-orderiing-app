import React, { useContext, useState, Fragment } from "react";
import styles from "../Cart/Cart.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "../Cart/CartItem";
import Checkout from "./Checkout";

const Cart = ( props ) =>
{
    const [showCheckout, setshowCheckout] = useState(false);
    const [isSubmitted, setisSubmitted] = useState(false);

    const cartCtx = useContext( CartContext );
    const cartItemsAddHandler = item => { 
        cartCtx.addItem({
            ...item, amount: 1
        });
    };
    const cartItemsRemoveHadnler = id => { 
        cartCtx.removeItem(id);
    };
    const orderItemsHandler = () => {
        setshowCheckout(true);
    };
    const checkoutHandler = (userData) => {
        setisSubmitted(true);
        console.log(userData);
        console.log(cartCtx.items);
        cartCtx.clear();
    }
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
    const orderSubmittedContent = <div className={styles.submitted}><h3>Order placed successfully. Enjoy your food...</h3></div>;
    const cartContent =  <Fragment>
             { cartItems }
            <h2> Total Amount: { totalAmount }  </h2>
            <div className={ styles.actions }>
                <Button label="Close" onClick={ props.onClose } />
                { hasItems && <Button label="Order Now" onClick={orderItemsHandler} /> }
            </div>
            { showCheckout && <Checkout onCheckoutFormClose={props.onClose} onFinalCheckoutHandler={checkoutHandler}></Checkout>}
    </Fragment>
    return (
        <Modal onClose={ props.onClose }>
            { isSubmitted && orderSubmittedContent }
            { !isSubmitted && cartContent }
        </Modal>
    );
};
export default Cart;