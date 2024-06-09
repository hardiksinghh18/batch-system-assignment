import React from 'react'

import bgGradient6 from '../images/bgGradient6.png'
import star1 from '../images/star-05.png'

import iphone from '../images/features-iphone.svg'
import hold from '../images/On Hold.svg'
import starImage2 from '../images/Star 2.svg'

const Advantages2 = () => {
  return (
    <div className='features advantages-2'>
 <div className="starImage6"><img src={starImage2} alt="" /></div>

    <div className='features-images'>
        <div className='grainy-background'>
            <img src={bgGradient6} alt="" />
        </div>
        <div className="iphoneImage">
            <img src={iphone} alt="" />
        </div>
    </div>
    <div className='features-content'>




        <div>
            <div>
                <div className='subheading'> <img src={star1} alt="" /> <h3>Fully Customizable</h3></div>
                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            </div>
         
        </div>

    </div>
</div>
  )
}

export default Advantages2
