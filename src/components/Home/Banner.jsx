import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <>
             {/* <!-- Banner --> */}

<div className="banner">
    <div className="banner_background" style={{backgroundImage:"url(images/banner_background.jpg)"}}></div>
    <div className="container fill_height">
        <div className="row fill_height">
            <div className="banner_product_image"><img src="images/banner_product.png" alt=""/></div>
            <div className="col-lg-5 offset-lg-4 fill_height">
                <div className="banner_content">
                    <h1 className="banner_text">new era of smartphones</h1>
                    <div className="banner_price"><span>$530</span>$460</div>
                    <div className="banner_product_name">Apple Iphone 6s</div>
                    <div className="button banner_button"><Link to="/shop">Shop Now</Link></div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Characteristics --> */}

<div className="characteristics" >
    <div className="container">
        <div className="row">

            {/* <!-- Char. Item --> */}
            <div className="col-lg-3 col-md-6 char_col">

                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                    <div className="char_icon"><img src="images/char_1.png" alt=""/></div>
                    <div className="char_content">
                        <div className="char_title">Free Delivery</div>
                        <div className="char_subtitle">from $50</div>
                    </div>
                </div>
            </div>

            {/* <!-- Char. Item --> */}
            <div className="col-lg-3 col-md-6 char_col">

                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                    <div className="char_icon"><img src="images/char_2.png" alt=""/></div>
                    <div className="char_content">
                        <div className="char_title">Free Delivery</div>
                        <div className="char_subtitle">from $50</div>
                    </div>
                </div>
            </div>

            {/* <!-- Char. Item --> */}
            <div className="col-lg-3 col-md-6 char_col">

                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                    <div className="char_icon"><img src="images/char_3.png" alt=""/></div>
                    <div className="char_content">
                        <div className="char_title">Free Delivery</div>
                        <div className="char_subtitle">from $50</div>
                    </div>
                </div>
            </div>

            {/* <!-- Char. Item --> */}
            <div className="col-lg-3 col-md-6 char_col">

                <div className="char_item d-flex flex-row align-items-center justify-content-start">
                    <div className="char_icon"><img src="images/char_4.png" alt=""/></div>
                    <div className="char_content">
                        <div className="char_title">Free Delivery</div>
                        <div className="char_subtitle">from $50</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default Banner
