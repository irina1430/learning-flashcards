import React, { useState, useEffect } from "react";
import "../GameItem/GameItem.scss";
import wordData from "../../data/words.json";

const GameCard = ({ word, transcription, translation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="game-card">
      <h2>{word}</h2>
      <p className="transcription">{transcription}</p>
      {!showTranslation ? (
        <button onClick={() => setShowTranslation(true)}>
          Показать перевод
        </button>
      ) : (
        <p className="translation">{translation}</p>
      )}
    </div>
  );
};

const GameItem = ({ active }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(wordData);
  }, []);

  const currentWord = words[active];
  if (!currentWord) return <p>Loading...</p>;
  return (
    <div className="game-item">
      {words.length > 0 && (
        <GameCard
          key={currentWord.id}
          word={currentWord.english}
          transcription={currentWord.transcription}
          translation={currentWord.russian}
        />
      )}
    </div>
  );
};
export { GameItem, GameCard };
