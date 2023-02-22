import styled from "styled-components";
import Forca0 from "../assets/forca0.png";
import Forca1 from "../assets/forca1.png";
import Forca2 from "../assets/forca2.png";
import Forca3 from "../assets/forca3.png";
import Forca4 from "../assets/forca4.png";
import Forca5 from "../assets/forca5.png";
import Forca6 from "../assets/forca6.png";

const HangmanStyle = styled.img((_) => ({
  width: "max(300px, min(calc(100% - 220px), 400px))",
}));

export default function Hangman({ errorCount = 0 }) {
  const images = [Forca0, Forca1, Forca2, Forca3, Forca4, Forca5, Forca6];
  const image = images[errorCount] || Forca6;
  return <HangmanStyle data-test="game-image" src={image} alt={image} />;
}
