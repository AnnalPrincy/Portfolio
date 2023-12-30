import React from 'react'
import './About.scss'
import profile from '../../src/assets/princy.png'
import people from '../../src/assets/people.png'
import medal from '../../src/assets/medal.png'
const About = () => {
  return (
    <>
    <div className="section1">
        <div className="header">
            <p>Get To Know More</p> 
            <h1>About Me</h1>
        </div>

        <div className="content">
            <div className="left">
                <div className="left_img">
                  <img src={profile} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="top">
                    <div className="c_left same">
                        <div className="icon">
                          <img src={medal} alt="" />
                        </div>
                        <h3>Experience</h3>
                        <h4>junior developer</h4>
                        <h4>frontend Developer</h4>
                    </div>
                    <div className="c_right same">
                      <div className="icon">
                        <img src={people} alt="" />
                      </div>
                        <h3>Education</h3>
                        <h4>B.sc.Computer science</h4>
                        
                    </div>
                </div>
                <div className="bottom">
                  <p>I have successfully completed my Bachelor of Science degree in Computer Science. Presently, I am actively engaged in the field of React.js, where I apply my expertise in HTML5, CSS, JavaScript, and React.js to contribute effectively to projects and tasks within this domain.</p> 
                </div>  
            </div>
        </div>
    </div>
    </>
  )
}

export default About