import { createContext,useContext,useEffect,useState } from 'react';
const WishlistContext=createContext(null);const read=()=>{try{return JSON.parse(localStorage.getItem('shoply-wishlist')||'[]')}catch{return []}};
export function WishlistProvider({children}){const [items,setItems]=useState(read);useEffect(()=>localStorage.setItem('shoply-wishlist',JSON.stringify(items)),[items]);const toggleWishlist=p=>setItems(old=>old.some(x=>x.id===p.id)?old.filter(x=>x.id!==p.id):[...old,p]);const removeFromWishlist=id=>setItems(old=>old.filter(x=>x.id!==id));const isWishlisted=id=>items.some(x=>x.id===id);return <WishlistContext.Provider value={{items,toggleWishlist,removeFromWishlist,isWishlisted}}>{children}</WishlistContext.Provider>}
export const useWishlist=()=>useContext(WishlistContext);
