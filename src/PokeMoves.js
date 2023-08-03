import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard";

function PokeMoves() {
  return (
    <div>
      <h1>PokeMoves</h1>
      {moves.map((item) => {
        return (
          <ul>
            <PokeMoveCard key={item.id} {...item} />
          </ul>
        );
      })}
    </div>
  );
}

export default PokeMoves;
