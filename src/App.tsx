import { createGlobalStyle } from "styled-components";
import RatingCard from "./components/rating-card/RatingCard";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Overpass', sans-serif;
    background-color: #131518;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RatingCard />
    </>
  );
}

export default App;
