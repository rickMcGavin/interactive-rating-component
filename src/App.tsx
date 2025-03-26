import { createGlobalStyle, ThemeProvider } from "styled-components";
import RatingCard from "./components/rating-card/RatingCard";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Overpass', sans-serif;
    background-color: ${({ theme }) => theme.colors.darkBlue.darker};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text.white};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RatingCard />
    </ThemeProvider>
  );
}

export default App;
