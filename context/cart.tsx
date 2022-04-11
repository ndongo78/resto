import React,{createContext} from 'react'
import {Cart, SingleProduct} from "../types"

const initialState:CartContext = {
    cart: [],
    total: 0,
    totalPrice: 0,
    setTotal: function (total: number): void {
        throw new Error('Function not implemented.');
    },
    setTotalPrice: function (totalPrice: number): void {
        throw new Error('Function not implemented.');
    },
    addToCart: (product: SingleProduct):void => {
        throw new Error('Function not implemented.');
    }

}
interface CartContext {
    cart: Cart;
    total: number;
    totalPrice: number;
    setTotal: (total: number) => void;
    setTotalPrice: (totalPrice: number) => void;
    addToCart: (product: SingleProduct) => void;
}
interface Props {
    children: React.ReactNode;
}


export const CartContext = createContext(initialState)

const Cart = ({children}:Props) => {
    const [cart, setCart] = React.useState(initialState.cart)
    const [total, setTotal] = React.useState(initialState.total)
    const [totalPrice, setTotalPrice] = React.useState(initialState.totalPrice)
  //add to cart
    const addToCart = (product: SingleProduct) => {
        const newCart = [...cart, {...product, quantity: 1}]
        setCart(newCart)
        //setTotal(newCart.length)
        //setTotalPrice(newCart.reduce((acc, curr) => acc + curr.price, 0))
    }
  
    return (
    <CartContext.Provider value={{
        cart, total, totalPrice,  setTotal, 
        setTotalPrice,addToCart
        }}>
        {children}
    </CartContext.Provider>
  )
}

export default Cart