import React from 'react'
import ShopItems from '../components/Shop/ShopItems'
import RecentlyViewed from '../components/Common/RecentlyViewed'
import Brand from "../components/Common/Brand"
import { useEffect } from 'react'
import '../styles/shop_styles.css'
import '../styles/shop_responsive.css'
const Shop = () => {
    useEffect(()=>{
        const script= document.createElement('script')
        script.src = "../js/shop_custom.js";
        script.async = true;
        document.body.appendChild(script)
      
        return ()=>{
            document.body.removeChild(script)
        }
    
    },[])
    return (
        <>
        <ShopItems/>
        <RecentlyViewed/>
        <Brand/>
            
        </>
    )
}

export default Shop
