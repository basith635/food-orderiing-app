import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from '../Cart/CartIcon.module.css';
import CartContext from "../../store/cart-context";
const CartIcon = ( props ) =>
{
    const [ highLight, setHighLight ] = useState( false );
    const cartCxt = useContext( CartContext );
    const totalNoOfcartItems = cartCxt.items.reduce( ( curNumber, item ) =>
    {
        return curNumber + item.amount;
    }, 0 )
    const btnClass = `${ styles[ 'cart-container' ] } ${ highLight ? styles.bounce : '' }`;
    const { items } = cartCxt;
    useEffect( () =>
    {
        if ( items === 0 )
        {
            return;
        }
        setHighLight( true );
    }, [ items ] );
    return (
        <Fragment>
            <div className={ btnClass } onClick={ props.onClick }>
                <span className={ styles[ 'cart-container-in' ] }>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/fast-cart.png" />
                    <span className={ styles[ 'cart-text' ] }>Your cart has </span>
                    <span className={ styles.badge }>
                        { totalNoOfcartItems }
                    </span> Items
            </span>
            </div>
        </Fragment>

    );
};
export default CartIcon;