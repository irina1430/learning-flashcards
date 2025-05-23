import { useState, useEffect, useRef } from "react";
import "../GameItem/GameItem.scss";
import wordData from "../../data/words.json";
import Game from "../../Pages/Game/Game";

const GameCard = ({ word, transcription, translation, onLearned }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef(null);

  const handleShowTranslation = () => {
    if (!showTranslation) {
      onLearned();
      setShowTranslation(true);
    }
  };
  useEffect(() => {
    setShowTranslation(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [word]);

  return (
    <div className="game-card">
      <h2>{word}</h2>
      <p className="transcription">{transcription}</p>
      {!showTranslation ? (
        <button
          className="show-btn"
          ref={buttonRef}
          onClick={handleShowTranslation}
        >
          Показать перевод
        </button>
      ) : (
        <p className="translation">{translation}</p>
      )}
    </div>
  );
};

const GameItem = ({ active, onLearned }) => {
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
          onLearned={onLearned}
        />
      )}
    </div>
  );
};
export { GameItem, GameCard };
