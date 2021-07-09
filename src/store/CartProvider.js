import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartValue = {
    items: [],
    totalAmount: 0
};
const cartReducer = ( state, action ) =>
{
    if ( action.type === 'ADD' )
    {
        // const updatedCartItems = state.items.concat(action.item); 
        const updatedTotalAmount  = state.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex  = state.items.findIndex( (item) => item.id  === action.item.id);
        const existingCartItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] =  updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
         
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        };
    }
    if ( action.type === 'REMOVE' )
    {
        const existingItemIndex  = state.items.findIndex( (item) => item.id  === action.id);
        const existingItem =  state.items[existingItemIndex];
        const updatedTotalAmount  = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1 ) {
            updatedItems = state.items.filter( item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1               
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        };
    }
    if (action.type === 'CLEAR') {
        return defaultCartValue;
    }
    return defaultCartValue;
}
const CartProvider = props =>
{
    const [ cartState, dispatchCartAction ] = useReducer( cartReducer, defaultCartValue );
    const addItemstoCartHandler = item =>
    {
        dispatchCartAction( { type: 'ADD', item: item } );
    };
    const removeItemfromCartHandler = id =>
    {
        dispatchCartAction( { type: 'REMOVE', id: id } );
    };
    const clearCartHandler = () => {
        dispatchCartAction({
            type : 'CLEAR'
        })
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemstoCartHandler,
        removeItem: removeItemfromCartHandler,
        clear: clearCartHandler
    };
    return <CartContext.Provider value={ cartContext }>
        { props.children }
    </CartContext.Provider>;
};

export default CartProvider;


