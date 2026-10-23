import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const CartContext=createContext(null); const readCart=()=>{try{return JSON.parse(localStorage.getItem('shoply-cart')||'[]')}catch{return []}};
export function CartProvider({children}){const [items,setItems]=useState(readCart);useEffect(()=>localStorage.setItem('shoply-cart',JSON.stringify(items)),[items]);
const addToCart=(product,quantity=1)=>setItems(old=>{const found=old.find(x=>x.id===product.id);return found?old.map(x=>x.id===product.id?{...x,quantity:x.quantity+quantity}:{...x}):[...old,{...product,quantity}]});
const setQuantity=(id,quantity)=>setItems(old=>quantity<=0?old.filter(x=>x.id!==id):old.map(x=>x.id===id?{...x,quantity}:x));const removeFromCart=id=>setItems(old=>old.filter(x=>x.id!==id));const clearCart=()=>setItems([]);
const totalItems=items.reduce((sum,x)=>sum+x.quantity,0);const totalPrice=items.reduce((sum,x)=>sum+x.price*x.quantity,0);const value=useMemo(()=>({items,addToCart,setQuantity,removeFromCart,clearCart,totalItems,totalPrice}),[items,totalItems,totalPrice]);return <CartContext.Provider value={value}>{children}</CartContext.Provider>}
export const useCart=()=>useContext(CartContext);
