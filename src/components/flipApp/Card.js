import React from 'react'
import './card.css'

export default function Card({card, handleChoice}){
    const handleClick =() => {
          handleChoice(card)
           

     }

  return (
<div className="card" >
                              <div>
                                 
                                   <div className="card-front">{card.word}</div>
                             
                                   <img src='/logo192.png' onClick={handleClick} className="card back" alt="back" />
                              </div>
                         </div>
  )
}

