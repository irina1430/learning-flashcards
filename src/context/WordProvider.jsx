import { useState } from "react";
import { WordContext } from "./WordContext";

import words from "../data/words.json";

export const WordProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);

  const updIndexNext = () => {
    setActive((prevActive) => (prevActive + 1) % words.length);
  };

  const updIndexPrev = () => {
    setActive((prevActive) =>
      prevActive === 0 ? words.length - 1 : prevActive - 1
    );
  };

  const handleLearned = () => {
    setLearnedCount((prev) => prev + 1);
  };

  return (
    <WordContext.Provider
      value={{
        active,
        learnedCount,
        updIndexNext,
        updIndexPrev,
        handleLearned,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
