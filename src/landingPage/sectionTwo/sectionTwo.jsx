import React, { useEffect, useRef } from 'react'
import hoverEffect from 'hover-effect'
import './styles.scss'

const SectionTwo = () => {
    const containerOne = useRef();
    const containertwo = useRef();

    useEffect(() => {
        new hoverEffect({
        parent: containerOne.current,
        intensity: -0.65,
        speedIn: 1.2, 
        speedOut: 1.2,
        image1: "https://ucarecdn.com/a60721db-8342-4c58-ada0-7b43d0661b63/item5.jpg",
        image2: "https://ucarecdn.com/f888e0bd-0826-4ab4-97d5-8ec2b799961b/item1hover.jpg",
        displacementImage:
            "https://ucarecdn.com/a410ae0a-537a-4b3d-9d4f-fe3be02eec10/8.jpg"
        });

        new hoverEffect({
            parent: containertwo.current,
            intensity: 0.7,
            speedIn: 1, 
            speedOut: 0.5,
            easing: "Power2.easeOut",
            image1: "https://ucarecdn.com/aebc0774-b9e6-4ee1-a5ac-472f6bbab037/item2hover.jpg",
            image2: "https://ucarecdn.com/30fcc3bb-72e4-493a-9ce0-bc5ec93aee20/item2.jpg",
            displacementImage:
                "https://ucarecdn.com/00696a3e-9195-4972-b486-460d9d880664/10.jpg"
            });
    }, [containerOne, containertwo]);

  return (
    <div className='wrap animate__animated animate__fadeInUp animate__delay-2s'>
        <div class="grid grid-cols-2 gap-3 mt-10">
            <div>
            <div
                className="parent"
                id="imgContainer"
                ref={containerOne}
                style={{
                // width: 400,
                height: 600,
                overflow: 'hidden'
                }}
            />
            </div>
            <div>
            <div
                className="parent"
                id="imgContainer"
                ref={containertwo}
                style={{
                // width: 400,
                height: 600,
                overflow: 'hidden'
                }}
            />
            </div>
            <div>
                <h1>Hello</h1>
            </div>
            <div>
                <h1>Hello</h1>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo