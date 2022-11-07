import React from 'react'
import Monster from './Monster/Monster'

const MonsterApp = () => {
  const color1 = "rgba(7, 27, 82, 1)"
  const color2 = "rgba(0, 128, 128, 1)"
  return (
    <div style={{background: `linear-gradient(to left,  ${color1} 0%,${color2} 100%)`, paddingBottom: 30}}>
      <Monster/>
    </div>
  )
}

export default MonsterApp