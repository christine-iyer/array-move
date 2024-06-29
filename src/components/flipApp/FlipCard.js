import { useState } from 'react'
const cardImages = [
     { "word": "bad" },
     { "word": "bed" },
     { "word": "bag" },
     { "word": "bit" },
     { "word": "bog" },
     { "word": "box" },
     { "word": "bug" },
     { "word": "bun" },
     { "word": "bus" },
     { "word": "cap" },
     { "word": "cup" },
     { "word": "dig" },
     { "word": "dot" },
     { "word": "fix" },
     { "word": "fog" },
     { "word": "fox" },
     { "word": "fun" },
     { "word": "gas" },
     { "word": "got" },
     { "word": "hen" },
     { "word": "hog" },
     { "word": "hip" },
     { "word": "hug" },
     { "word": "hum" },
     { "word": "jet" },
     { "word": "job" },
     { "word": "jog" },
     { "word": "jug" },
     { "word": "kid" },
     { "word": "leg" },
     { "word": "lip" },
     { "word": "man" },
     { "word": "map" },
     { "word": "men" },
     { "word": "mix" },
     { "word": "nap" },
     { "word": "pen" },
     { "word": "rag" },
     { "word": "rob" },
     { "word": "rug" },
     { "word": "six" },
     { "word": "sun" },
     { "word": "tax" },
     { "word": "ten" },
     { "word": "wax" },
     { "word": "web" },
     { "word": "wet" },
     { "word": "wig" },
     { "word": "win" },
     { "word": "yes" },
]
export default function FlipCard() {
     const [cards, setCards] = useState([])
     const [turns, setTurns] = useState(0)
     const shuffleCards = () => {
          const shuffledCards = [...cardImages, ...cardImages]
               .sort(() => Math.random() - 0.5)
               .map((card) => ({ ...card, id: Math.random() }))
          setCards(shuffledCards)
          setTurns(0)
          console.log(cards, turns)
     }


     return (
          <div className="flipcard">
               <h1>Matching</h1>
               <button onClick={shuffleCards}>NewGame</button>
               <div className='card-grid'>
                    {cards.map(card => (
                         <div className="card" key={card.id}>
                              <div>
                                   <p className = "front">{card.word}</p>
                                   

                              </div>   
                              </div>                  
                              ))}
                         </div>
                         </div>

                    )
     
     
}