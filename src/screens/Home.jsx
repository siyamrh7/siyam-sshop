import React from 'react'
import Banner from '../components/Home/Banner'
import Banner2 from '../components/Home/Banner2'
import Advert from '../components/Home/Advert'
import DealsOfWeek from '../components/Home/DealsOfWeek'
import HotNewArrive from '../components/Home/HotNewArrive'
import PopularCategory from '../components/Home/PopularCategory'
import BestSeller from '../components/Home/BestSeller'
import Trend from '../components/Home/Trend'
import LatestReview from '../components/Home/LatestReview'
import RecentlyViewed from '../components/Common/RecentlyViewed'
import Brand from '../components/Common/Brand'
import '../styles/main_styles.css'
import '../styles/responsive.css'
import { useEffect } from 'react'
const Home = () => {
useEffect(()=>{
    const script= document.createElement('script')
    script.src = "../js/custom.js";
    script.async = true;
    document.body.appendChild(script)
  
    return ()=>{
        document.body.removeChild(script)
    }

},[])
    return (
        <>
            <Banner />
            <DealsOfWeek />
            <PopularCategory />
            <Banner2 />
            <HotNewArrive />
            <BestSeller />
            <Advert />
            <Trend />
            <LatestReview />
            <RecentlyViewed />
            <Brand />
        </>
    )
}

export default Home
