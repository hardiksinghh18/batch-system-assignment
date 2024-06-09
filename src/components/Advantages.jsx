import React from 'react'

import bell from '../images/bell.png'

import bgGradient5 from '../images/bgGradient5.png'
import advantages1 from '../images/advantages1.svg'
import hold from '../images/On Hold.svg'
import starImage5 from '../images/Star 5.svg'

const Advantages = () => {
    return (
        <div className='features advantages'>

<div className="starImage5"><img src={starImage5} alt="" /></div>

            <div className='features-content'>



                <h4>Advantages</h4>
                <h2>Why Choose Uifry ?</h2>

                <div>
                    <div>
                        <div className='subheading'> <img src={bell} alt="" /> <h5>Clever Notifications</h5></div>
                        <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                  
                </div>

            </div>


            <div className='features-images'>
                <div className='grainy-background'>
                    <img src={bgGradient5} alt="" />
                </div>

                <div className="holdImage"><img src={hold} alt="" /></div>
                <div className="iphoneImage">
                    <img src={advantages1} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Advantages
