import React from 'react'
import './Skills.scss'
import html from '../../src/assets/html-5.png'
import css from '../../src/assets/css.png'
import react from '../../src/assets/react.svg'
import javascript from '../../src/assets/javascript.png'
import github from '../../src/assets/github.png'

const Skills = () => {
  return (
    <>
    <div className="skill">
        <div className="inner">
            <div className="top">
            <h1>What I do</h1>
            <p> I possess strong expertise in frontend languages and am driven to delve deeper into the intricacies, aiming to transform my skills into a meaningful and impactful contribution.</p>
        </div>
        <div className="bottom">
            <div className="left">
                <h2>Skills</h2>
                
            </div>
            <div className="right">
                <div className="row1">
                    <div className="box"><img src={html} alt="" /></div>
                    <div className="box"><img src={css} alt="" /></div>
                    <div className="box"><img src={react} alt="" /></div>
                    <div className="box"><img src={javascript} alt="" /></div>
                    <div className="box"><img src={github} alt="" /></div>
                    <div className="box"><img src={github} alt="" /></div>
                    <div className="box"><img src={javascript} alt="" /></div>
                    <div className="box"><img src={react} alt="" /></div>
                    <div className="box"><img src={css} alt="" /></div>
                    <div className="box"><img src={html} alt="" /></div>
                    
                   
                    
                    





                </div>
                
            </div>

        </div>
        </div>
    </div>
    </>
  )
}

export default Skills