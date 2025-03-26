import styled from "styled-components";

export const StarContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue.light};
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
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 28px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.lightGray};
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
  background: ${(props) =>
    props.selected
      ? props.theme.colors.primary
      : props.theme.colors.darkBlue.light};
  color: ${(props) =>
    props.selected
      ? props.theme.colors.text.white
      : props.theme.colors.text.mediumGray};
  width: 51px;
  height: 51px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.white};
  }

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
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
    background: ${({ theme }) => theme.colors.darkBlue.light};
    color: ${({ theme }) => theme.colors.text.mediumGray};
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.text.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
