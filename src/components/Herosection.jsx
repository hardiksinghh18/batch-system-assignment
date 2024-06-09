import React from 'react'
import bgGradient1 from '../images/bgGradient1.png'
import bgGradient2 from '../images/bgGradient2.png'
import ribbon from '../images/ribbon.svg'
import hero_section_iphones from '../images/hero-section-iphones.svg'
import iphone1 from '../images/hero-section-iphone-1.svg'
import iphone2 from '../images/hero-section-iphone-2.svg'
import playBtn from '../images/playBtn.png'
import starImage2 from '../images/Star 2.svg'


const Herosection = () => {
  return (
    <div className='heroSection'>

     <div className="starImage2"><img src={starImage2} alt="" /></div>
     <div className="starImage3"><img src={starImage2} alt="" /></div>


      <div className='heroSection-1  '>
        <div className="grainy-background-1">

          <img src={bgGradient1} alt="bggradient" />
        </div>
        <div className='heroSection-1-content'>
          <h1>Make the Best Financial Decisions</h1>
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

          <div className='heroSetion-buttons'>
            <button className='blackBtn'> Get Started &rarr;</button>
            <div className="playBtn">
              <img src={playBtn} alt="" /><button>Watch Video</button>
            </div>

          </div>
        </div>

        <div className='ribbon'>
          <img src={ribbon} alt="" />
        </div>

      </div>
      <div className='heroSection-2'>
        <div className='grainy-background-2'>

          <img src={bgGradient2} alt="" />
        </div>

        <div className="iphones">
          <div className='iphone1'> <img  src={iphone1} alt="" /></div>
         <div className='iphone2'> <img  src={iphone2} alt="" /></div>
         <div className='iphone3'><img  src={hero_section_iphones} alt="" /></div>
         
          
        </div>
      </div>
    </div>
  )
}

export default Herosection
