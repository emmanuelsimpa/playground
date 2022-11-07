import React from 'react'
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';

  const image4 = "https://img.freepik.com/free-photo/abstract-design-purple-flowing-lines_1048-14297.jpg?t=st=1657179796~exp=1657180396~hmac=4598ef874fad1202d230712863349b9f6462162a81af1e0677b357fbfa045cd9&w=1060"
// const image4 = "https://png.pngtree.com/thumb_back/fh260/background/20200801/pngtree-purple-abstract-background-fluid-gradient-with-wave-forms-image_375467.jpg"
// const image4 = "https://raw.githubusercontent.com/TheClosure/parallax-tutorial/master/src/background.png"
//   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  backgroundImage: '#FBF5FF',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

const SectionThree = () => {

    const text = {
        one: "Welcome to Yakubu Emmanuel Simpa Portfolio",
        two: "The landing Page show Doctor Bosey CSS Prowess",
        three: "Monster page is build with ReactJs for Monster Search and Draggable modal"
      }

  return (
    <div>
        <div style={{ textAlign: 'center' }}>
        <Parallax bgImage={ image4 } strength={500}>
        <div style={{ height: "100vh" }}>
          <div style={inlineStyle}>
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
      </Parallax>
    </div>
    </div>
  )
}

export default SectionThree