import Card from "./Card";
import './card.css'
export default function Deck(options) {
     const { arrayC, handleArrayCClick } = options;

     return (
       <div className="deck">
         {arrayC.map((card, index) => (
           <Card
             key={index}
             number={card.number}
             color={card.color}
             symbol={card.symbol}
             name={card.name}
             handleClick={handleArrayCClick}
           />
           
         ))}
       </div>
     );
   }