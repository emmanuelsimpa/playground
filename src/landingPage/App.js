import React from 'react'
import NavBar from './navbar/Navbar'
import FirstSection from './firstSection/firstSection'
import SectionTwo from './sectionTwo/sectionTwo'
import 'animate.css';
import SectionThree from './sectionthree/sectionThree';
import { Parallax } from 'react-parallax';



const LandingApp = () => {
  return (
    <div>
        <NavBar/>
        <FirstSection/>
        <SectionTwo />
        <SectionThree/>
    </div>
  )
}

export default LandingApp