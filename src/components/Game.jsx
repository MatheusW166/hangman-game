import styled from "styled-components";
import Letters from "./Letters";
import PickWordBtn from "./PickWordBtn";
import Hangman from "./Hangman";
import Word from "./Word";
import palavras, { alfabeto } from "../palavras";
import { useState } from "react";
import {} from "../helpers/string.extensions";
import Guess from "./Guess";

const GameStyle = styled.div((_) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "80px",
}));

const HangmanContainerStyle = styled.div((_) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  flexWrap: "wrap",
  "@media(max-width:547px)": {
    justifyContent: "center",
  },
}));

const WordContainerStyle = styled.div((_) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
  "@media(max-width:547px)": {
    alignItems: "center",
    marginTop: "50px",
  },
}));

export default function Game() {
  const [errorsCount, setErrorsCount] = useState(0);
  const [lettersPicked, setLettersPicked] = useState({});
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");
  console.log(word);
  function resetGame() {
    setLettersPicked({});
    setErrorsCount(0);
    setGuess("");
  }

  function pickWord() {
    const randomWord = palavras[Math.floor(Math.random() * palavras.length)];
    setWord(randomWord);
    resetGame();
  }

  function handleError(letterPicked) {
    const letterBase = letterPicked?.getLetterBase();
    for (let w of word) {
      if (letterBase === w.getLetterBase()) {
        return;
      }
    }
    setErrorsCount(errorsCount + 1);
  }

  const hitsCount = () => {
    if (!word) return -1;
    const wordBase = word.getStringBase();
    let hitsCount = 0;
    Object.keys(lettersPicked).forEach(
      (l) => (hitsCount += wordBase.countOcurrence(l))
    );
    return hitsCount;
  };

  const hitTheWord = () => hitsCount() === word.length;
  const hitTheGuess = (guess) => guess && guess.isEqual(word);

  const isLoser = () => errorsCount === 6;
  const isWinner = () => !isLoser() && (hitTheWord() || hitTheGuess(guess));

  const endGame = () => isLoser() || isWinner();

  function pickLetter(letter) {
    const newObj = { ...lettersPicked };
    newObj[letter] = true;
    setLettersPicked(newObj);
    handleError(letter);
  }

  function handleGuess(input, value) {
    if (!value?.trim()) {
      return;
    }
    setGuess(value);
    input.value = "";
    if (!hitTheGuess(value)) {
      setErrorsCount(6);
    }
  }

  return (
    <GameStyle>
      <HangmanContainerStyle>
        <Hangman errorCount={errorsCount} />
        <WordContainerStyle>
          <PickWordBtn onClick={pickWord}>Escolher Palavra</PickWordBtn>
          <Word
            endGame={endGame()}
            isWinner={isWinner()}
            isLoser={isLoser()}
            word={word}
            lettersPicked={lettersPicked}
          />
        </WordContainerStyle>
      </HangmanContainerStyle>
      <Letters
        lettersPicked={lettersPicked}
        letters={alfabeto}
        onClick={pickLetter}
        isGameRunning={word && !endGame()}
      />
      <Guess onSubmit={handleGuess} disabled={!word || endGame()} />
    </GameStyle>
  );
}
