import React from 'react'
import SingleProduct from '../components/Detail/SingleProduct'
import RecentlyViewed from '../components/Common/RecentlyViewed'
import Brand from '../components/Common/Brand'
import '../styles/product_styles.css'
import '../styles/product_responsive.css'
import { useEffect } from 'react'
const Detail = () => {
    useEffect(()=>{
        const script= document.createElement('script')
        script.src = "../js/product_custom.js";
        script.async = true;
        document.body.appendChild(script)
      
        return ()=>{
            document.body.removeChild(script)
        }
    
    },[])
    return (
        <>
            <SingleProduct />
            <RecentlyViewed />
            <Brand />
        </>
    )
}

export default Detail
