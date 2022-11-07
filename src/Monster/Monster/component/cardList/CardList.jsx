import React from 'react'
import Card from '../card/Card'

export default function CardList(props) {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 mx-5">
      {props.monsters.length > 0 ? 
      props.monsters.map((item) => (
        <div key={item.id} className='border-1 border-gray-200 rounded-xl bg-[#95dada] p-2 hover:scale-105 transition duration-1000'>
          <Card key={item.id} monsters={item}/>
        </div>
      )) : (<p>Good</p>)}
    </div> 
    </>
  )
}
