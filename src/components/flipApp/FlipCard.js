import { useState, useEffect } from 'react'
import Card from './Card'


const cardImages = [
     { "word": "bad", "matched": false },
     { "word": "bed", "matched": false },
     { "word": "bag", "matched": false },
     { "word": "bit", "matched": false },
     { "word": "bog", "matched": false },
     { "word": "box", "matched": false },
     { "word": "bug", "matched": false },
     { "word": "bun", "matched": false },
     { "word": "bus", "matched": false },
     { "word": "cap", "matched": false },
     { "word": "cup", "matched": false },
     { "word": "dig", "matched": false },
     // { "word": "dot" , "matched": false },},
     // { "word": "fix" , "matched": false },},
     // { "word": "fog" , "matched": false },},
     // { "word": "fox" , "matched": false },},
     // { "word": "fun" , "matched": false },},
     // { "word": "gas" , "matched": false },},
     // { "word": "got" , "matched": false },},
     // { "word": "hen" , "matched": false },},
     // { "word": "hog" , "matched": false },},
     // { "word": "hip" , "matched": false },},
     // { "word": "hug" , "matched": false },},
     // { "word": "hum" , "matched": false },},
     // { "word": "jet" , "matched": false },},
     // { "word": "job" , "matched": false },},
     // { "word": "jog" , "matched": false },},
     // { "word": "jug" , "matched": false },},
     // { "word": "kid" , "matched": false },},
     // { "word": "leg" , "matched": false },},
     // { "word": "lip" , "matched": false },},
     // { "word": "man" , "matched": false },},
     // { "word": "map" , "matched": false },},
     // { "word": "men" , "matched": false },},
     // { "word": "mix" , "matched": false },},
     // { "word": "nap" , "matched": false },},
     // { "word": "pen" , "matched": false },},
     // { "word": "rag" , "matched": false },},
     // { "word": "rob" , "matched": false },},
     // { "word": "rug" , "matched": false },},
     // { "word": "six" , "matched": false },},
     // { "word": "sun" , "matched": false },},
     // { "word": "tax" , "matched": false },},
     // { "word": "ten" , "matched": false },},
     // { "word": "wax" , "matched": false },},
     // { "word": "web" , "matched": false },},
     // { "word": "wet" , "matched": false },},
     // { "word": "wig" , "matched": false },},
     // { "word": "win" , "matched": false },},
     // { "word": "yes" , "matched": false },},
]
export default function FlipCard() {
     const [cards, setCards] = useState([])
     const [turns, setTurns] = useState(0)
     const [choiceOne, setChoiceOne] = useState(null)
     const [choiceTwo, setChoiceTwo] = useState(null)
     const [disabled, setDisabled] = useState(false)
     const shuffleCards = () => {
          const shuffledCards = [...cardImages, ...cardImages]
               .sort(() => Math.random() - 0.5)
               .map((card) => ({ ...card, id: Math.random() }))

          setChoiceOne(null)
          setChoiceTwo(null)
          setCards(shuffledCards)
          setTurns(0)
     }
     const handleChoice = (card) => {
          choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
     }
     useEffect(() => {
          if (choiceOne && choiceTwo) {
               setDisabled(true)
               if (choiceOne.word === choiceTwo.word) {
                    setCards(prevCards => {
                         return prevCards.map(card => {
                              if (card.word === choiceOne.word) {
                                   return { ...card, matched: true }
                              } else {
                                   return card;
                              }
                         })
                    })
                    resetTurn()
               } else {
                    setTimeout(() => resetTurn(), 1000)
               }
          }
     }, [choiceOne, choiceTwo])
     console.log(cards)

     const resetTurn = () => {
          setChoiceOne(null)
          setChoiceTwo(null)
          setTurns(prev => prev + 1)
          setDisabled(false)
     }
     useEffect(() => {
          shuffleCards()
     }, [])

     return (
          <div className="flipcard">
               <h1>Matching</h1>
               <button onClick={shuffleCards}>NewGame</button>
               <div className='card-grid'>
                    {cards.map(card => (
                         <Card key={card.id}
                              card={card}
                              handleChoice={handleChoice}
                              flipped={card === choiceOne || card === choiceTwo || card.matched}
                              disabled={disabled}
                         />
                    ))}
                    <p>Turns: {turns}</p>
               </div>
          </div>
     )
}
