import { useContext } from "react";
import { WordContext } from "../../context/WordContext";
import { GameItem } from "../../Components/GameItem/GameItem";
import "./game.scss";

export default function Game() {
  const { active, learnedCount, updIndexNext, updIndexPrev, handleLearned } =
    useContext(WordContext);

  return (
    <div className="game-wrapper">
      <h3>Изучено слов: {learnedCount}</h3>
      <div className="game_container">
        <div className="btn-prev">
          <button onClick={updIndexPrev}>Previous</button>
        </div>
        <GameItem active={active} onLearned={handleLearned} />
        <div className="btn-next">
          <button onClick={updIndexNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
