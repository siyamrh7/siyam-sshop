import React from 'react'
import '../styles/blog_single_styles.css'
import '../styles/blog_single_responsive.css'

import { useEffect } from 'react'
const BlogSingle = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = "../js/blog_single_custom.js";
        script.async = true;
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }

    }, [])
    return (
        <>
            {/* <!-- Home --> */}

            <div className="home">
                <div className="home_background parallax-window" dataparallax="scroll" dataImageSrc="images/blog_single_background.jpg" dataSpeed="0.8"></div>
            </div>

            {/* <!-- Single Blog Post --> */}

            <div className="single_post">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="single_post_title">Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</div>
                            <div className="single_post_text">
                                <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue arcu, consequat a nisl
                                    aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis arcu a magna
                                    sodales venenatis. Integer non diam sit amet magna luctus mollis ac eu nisi. In accumsan tellus ut dapibus blandit.</p>

                                <div className="single_post_quote text-center">
                                    <div className="quote_image"><img src="images/quote.png" alt="" /></div>
                                    <div className="quote_text">Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras et sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia lacus.</div>
                                    <div className="quote_name">Liam Neeson</div>
                                </div>

                                <p>Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla lorem augue, mollis non est et, eleifend elementum ante. Nunc id pharetra magna. Praesent vel orci ornare, blandit mi sed, aliquet nisi. className aptent taciti
                                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Blog Posts --> */}

            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="blog_posts d-flex flex-row align-items-start justify-content-between">

                                {/* <!-- Blog post --> */}
                                <div className="blog_post">
                                    <div className="blog_image" style={{ backgroundImage: "url(images/blog_4.jpg)" }}></div>
                                    <div className="blog_text">Etiam leo nibh, consectetur nec orci et, tempus tempus ex</div>
                                    <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                </div>

                                {/* <!-- Blog post --> */}
                                <div className="blog_post">
                                    <div className="blog_image" style={{ backgroundImage: "url(images/blog_5.jpg)" }}></div>
                                    <div className="blog_text">Sed viverra pellentesque dictum. Aenean ligula justo, viverra in lacus porttitor</div>
                                    <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                </div>

                                {/* <!-- Blog post --> */}
                                <div className="blog_post">
                                    <div className="blog_image" style={{ backgroundImage: "url(images/blog_6.jpg)" }}></div>
                                    <div className="blog_text">In nisl tortor, tempus nec ex vitae, bibendum rutrum mi. Integer tempus nisi</div>
                                    <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSingle
