import React from "react";
import { useState } from "react";
import { GameItem } from "../../Components/GameItem/GameItem";
import "./game.scss";
import wordData from "../../data/words.json";

export default function Game() {
  const [active, setActive] = useState(0);

  function updIndexNext() {
    setActive((prevActive) => (prevActive + 1) % wordData.length);
  }
  function updIndexPrev() {
    setActive((prevActive) =>
      prevActive === 0 ? wordData.length - 1 : prevActive - 1
    );
  }

  return (
    <div className="game_container">
      <div className="btn-prev">
        <button onClick={updIndexPrev}>Previous</button>
      </div>
      <GameItem active={active} />
      <div className="btn-next">
        <button onClick={updIndexNext}>Next</button>
      </div>
    </div>
  );
}
