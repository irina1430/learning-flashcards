import React from "react";
import { useState } from "react";
import { GameItem } from "../../Components/GameItem/GameItem";
import "./game.scss";

export default function Game() {
  const [active, setActive] = useState(0);

  function updIndexNext() {
    setActive((prevActive) => prevActive + 1);
  }
  function updIndexPrev() {
    setActive((prevActive) => prevActive - 1);
  }

  return (
    <div className="game_container">
      <div className="btn-prev">
        <button onClick={updIndexPrev} disabled={active === 0}>
          Previous
        </button>
      </div>
      <GameItem active={active} />
      <div className="btn-next">
        <button onClick={updIndexNext} disabled={active === 10}>
          Next
        </button>
      </div>
    </div>
  );
}
