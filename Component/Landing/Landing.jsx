import React from 'react'
import './Landing.scss'
import mobile from '../../src/assets/mobile.png'
import mobileTop from '../../src/assets/mobile_top.png'
import profile from '../../src/assets/profile.jpeg'
import mypro from '../../src/assets/mypro.jpeg'
import mobilebottom from '../../src/assets/mobile_bottom.png'
const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="inner">
          <div className="landing_left">
              <h1>A <span>Software Developer</span> <br />from TamilNadu</h1>
              <br />
              <div className="btn">
              <button>More About Me &#8594; </button>
              </div>
          </div>
          <div className="landing_right">
                <div className="total_img">
                   <img src={mobile} alt="" />
                   <div className="inner_img">
                    <img src={mobileTop} alt="" />
                    <div className="profile">
                      <div className="round">
                        <img src={profile} alt="" />
                      </div>
                      <div className="Name">Annal princy</div>
                    </div>
                    <div className="my_profile">
                      <img src={mypro} alt="" />
                    </div>
                    <div className="bottom">
                      <img src={mobilebottom} alt="" />
                    </div>
                   </div>
                </div>
          </div>  
       </div>
      </div>
    </>
  )
}

export default Landing
