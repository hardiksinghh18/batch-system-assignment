import React from 'react'
import bgGradient3 from '../images/bgGradient3.png'
import bgGradient4 from '../images/bgGradient4.svg'
import star1 from '../images/star-05.png'
import star2 from '../images/cube-02.png'
import star3 from '../images/cube-04.png'
import iphone from '../images/features-iphone.svg'

import starImage2 from '../images/Star 2.svg'

const Features = () => {
    return (
        <div className='features'>
               <div className="starImage4"><img src={starImage2} alt="" /></div>

            <div className='grainy-background4'>
                <img src={bgGradient4} alt="" />
            </div>

            <div className='features-images'>
                <div className='grainy-background'>
                    <img src={bgGradient3} alt="" />
                </div>
                <div className="iphoneImage">
                    <img src={iphone} alt="" />
                </div>
            </div>
            <div className='features-content'>



                <h4>FEATURES</h4>
                <h2>Uifry Premium</h2>

                <div>
                    <div>
                        <div className='subheading'> <img src={star1} alt="" /> <h5>Budgeting Intervals</h5></div>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div>
                        <div className='subheading'> <img src={star2} alt="" /> <h5>Budgeting Intervals</h5></div>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div>
                        <div className='subheading'> <img src={star3} alt="" /> <h5>Budgeting Intervals</h5></div>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features
