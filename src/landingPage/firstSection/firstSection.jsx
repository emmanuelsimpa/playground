import React from 'react'
import Typewriter from 'typewriter-effect';
import './styles.scss'

const FirstSection = () => {
  const text = {
    one: "Welcome to Yakubu Emmanuel Simpa Portfolio",
    two: "The landing Page show Doctor Bosey CSS Prowess",
    three: "Monster page is build with ReactJs for Monster Search and Draggable modal"
  }
  return (
    <div className='pt-8'>
      <div className="body">
      <div className="grid grid-cols-2 gap-4 content-center md:grid-cols-2">
        <div>
        <div className='gridOne-wrap'>
          <div className='typeWriter'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(text.one)
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                typewriter.typeString(text.two)
                .pauseFor(3500)
                .deleteChars(42)
                typewriter.typeString(text.three)
                .pauseFor(3500)
                .deleteAll()
                typewriter.typeString(text.one)
                .start();
            }}
          />
          </div>
        </div>
        </div>
        <div>
          <div className="gridtwo-wrap">
            <div className="image-wrap ">
            <img className='animate-bounced landing_image' src="/Assets/landing.svg" alt="landing" />
            </div> 
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FirstSection