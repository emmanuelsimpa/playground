import React, {useState} from 'react'
import './style.scss'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll=()=>{
       setIsScrolled(window.pageYOffset === 0 ? false : true)
       return () => (window.onscroll = null)
    }
    return (
        <div
        className={isScrolled ? "navbar scrolled" : "navbar"}
        >
          <div className="w-full sub-nav-bar-cont">
            <div className="nav-wrapper">
                <div className="sub-nav-bar">
                <div className="nav-bar__logo">
                <img
                    src="/Assets/logo.svg"
                    width="50%"
                    alt="UH"
                />
                </div>
                <ul className="hidden sm:block">
                    <li className="sub-nav-bar-link sub-nav-bar__active-link">
                    Home
                    </li>
                    <li className="sub-nav-bar-link">
                    Monster
                    {/* <span class="line-1 anim-typewriter">Monster</span> */}
                    </li>
                    <li className="sub-nav-bar-link">E-Commerce</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Navbar
