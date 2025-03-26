import styled from "styled-components";

export const StarContainer = styled.div`
  background: #262e38;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 28px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: #969fad;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const RatingButton = styled.button<{ selected?: boolean }>`
  background: ${(props) => (props.selected ? "#fc7614" : "#262e38")};
  color: ${(props) => (props.selected ? "#ffffff" : "#7c8798")};
  width: 51px;
  height: 51px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fc7614;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: #fc7614;
  color: #ffffff;
  width: 100%;
  padding: 14px;
  border-radius: 22.5px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:disabled {
    background: #262e38;
    color: #7c8798;
    cursor: not-allowed;
  }

  &:hover {
    background: #ffffff;
    color: #fc7614;
  }

  &:hover:disabled {
    background: #262e38;
    color: #7c8798;
  }
`;
