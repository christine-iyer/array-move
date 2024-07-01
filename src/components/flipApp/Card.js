import React from 'react'
import './card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {
     const handleClick = () => {
          if(!disabled) {
          handleChoice(card)
     }
     }
     return (
          <div className="card" >
               <div className={flipped ? "flipped" : ""}>
                    <div className="front">{card.word}</div>
                    <img src='/logo192.png' onClick={handleClick} className="back" alt="back" />
               </div>
          </div>
     )
}

