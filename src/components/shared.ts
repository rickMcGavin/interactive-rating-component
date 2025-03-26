import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(145deg, #232a34, #181e27);
  border-radius: 30px;
  padding: 32px;
  max-width: 412px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px;

  @media (max-width: 480px) {
    padding: 24px;
    margin: 16px;
  }
`;
