import React, { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext(null);
const CART_KEY = 'cart';  // defines a constant 'CART_KEY' with the value 'cart' which will be used as the key for storing the cart data in the browsers local storage
const EMPTY_CART = { // Defines an object 'EMPTY_CART' with properties for items, total price and total count.
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export default function CartProvider({ children }) {
    const initCart = getCartFromLocalStorage();
    const [cartItems, setCartItems] = useState(initCart.items);
    const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
    const [totalCount, setTotalCount] = useState(initCart.totalCount);
// utilsing useEffect here to calculate aggreagte price and quantity of items within shopping cart, the updates the state variables 'totaPrice' and 'totalCount'
    useEffect(() => {
      const totalPrice = sum(cartItems.map(item => item.price));
      const totalCount = sum(cartItems.map(item => item.quantity));
      setTotalPrice(totalPrice);
      setTotalCount(totalCount);
// updates shopping cart data stored in teh local storage with the current 'cartItems', 'totalPrice' and 'totalCount' whenver 'cartItems' changes.
// helper func 'getCartFromLocalStorage' retrieves cart data from local storage and 'sum' for calculating the sum of items in the array.
      localStorage.setItem(CART_KEY, JSON.stringify({ items: cartItems, totalPrice, totalCount,}));
    }, [cartItems]);

    function getCartFromLocalStorage(){
      const storedCart = localStorage.getItem(CART_KEY);
      return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
    }

    const sum = items => {
      return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
    };


// Here we are filtering all the food items and returning everything but the food id. (Removing the food id from the filteredcartitems)
    const removeFromCart = foodId => {
      const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
      setCartItems(filteredCartItems);
    };

  const changeQuantity = (cartItem, newQuantity) => {
    const { food } = cartItem;

    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: food.price * newQuantity,
    };
// 'addToCart funcion adds food items to 'cartItems' by eihter incrementing the quantity of of an existing item or adding a new item with a quantity of 1 and the food's price if it doesnt already exist.
    setCartItems(
      cartItems.map(item => item.food.id === food.id? changedCartItem : item)
    );
  };

  const addToCart = food => {
    const cartItem = cartItems.find(item => item.food.id === food.id);
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { food, quantity: 1, price: food.price }]);
    }
  };

  return ( 
    <CartContext.Provider 
        value={{ cart: { items: cartItems, totalPrice, totalCount }, 
        removeFromCart, 
        changeQuantity,
        addToCart,
      }}
    >
        {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext)