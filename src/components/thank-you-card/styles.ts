import styled from "styled-components";

export const ThankYouContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`;

export const RatingResult = styled.div`
  background: #262e38;
  color: #fc7614;
  padding: 4px 20px;
  border-radius: 22.5px;
  display: inline-block;
  margin: 24px 0;
  font-size: 15px;
`;

export const ThankYouTitle = styled.h1`
  color: #ffffff;
  font-size: 28px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ThankYouDescription = styled.p`
  color: #969fad;
  font-size: 15px;
  line-height: 1.6;
`;
