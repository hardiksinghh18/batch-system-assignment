import React from 'react'
import testimonial from '../images/testimonialImage.svg'
import profiles from '../images/profiles.svg'
import bgGradient7 from '../images/bgGradient7.png'
import starImage2 from '../images/Star 2.svg'
const Testimonials = () => {
    return (
        <div className='testimonials'>
  <div className="starImage7"><img src={starImage2} alt="" /></div>

            <div className="testimonial-heading">
                <h4>TESTIMONIALS</h4>
                <h1>What Our Users Say About Us?</h1>
            </div>

            <div className='features'>


                <div className='features-images'>
                    <div className='grainy-background'>
                        <img src={bgGradient7} alt="" />
                    </div>
                    <div className="iphoneImage">
                        <img src={testimonial} alt="" />
                    </div>
                </div>
                <div className='features-content'>




                    <div>
                        <div>
                            <div className='subheading'> <h3>The Best Financial Accounting App Ever!</h3></div>
                            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        
                        </div>
                       <div>
                        <img src={profiles} alt="" />
                        <h3>Nick Jonas</h3>
                       </div>
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default Testimonials
