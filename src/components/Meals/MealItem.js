import React, { useContext } from 'react';
import Card from '../UI/Card';
import styles from '../Meals/MealItem.module.css';
import MealItemForm from '../Meals/MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = ( props ) =>
{
    const price = `$${ props.price.toFixed( 2 ) }`;
    const cartCtx = useContext( CartContext );
    const addToCartHandler = amount =>
    {
        cartCtx.addItem( {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        } );
    };
    return <li>
        <Card>
            <div className={ styles.container }>
                <div className={ styles.imgBlock }>
                    <img src={ require( "../../images/1.jpg" ) } alt={ props.name } width="100%" />
                    <h3>
                        { props.name }
                    </h3>
                </div>
                <div className={ styles.description }>
                    { props.description }
                    <br /> <br /> <b>Price : { price } </b>
                </div>
                <div className={ styles[ 'item-form' ] }>
                    <MealItemForm onAddToCart={ addToCartHandler } />
                </div>

            </div>
        </Card>
    </li>;
};
export default MealItem;