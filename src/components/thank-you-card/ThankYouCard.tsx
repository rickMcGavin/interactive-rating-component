import { Card } from "../shared";
import {
  ThankYouContainer,
  RatingResult,
  ThankYouTitle,
  ThankYouDescription,
} from "./styles";

export const ThankYouCard = ({ rating }: { rating: number | null }) => {
  if (!rating) return null;
  return (
    <Card>
      <ThankYouContainer>
        <img src="/illustration-thank-you.svg" alt="Thank you" />
        <RatingResult>You selected {rating} out of 5</RatingResult>
        <ThankYouTitle>Thank you!</ThankYouTitle>
        <ThankYouDescription>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </ThankYouDescription>
      </ThankYouContainer>
    </Card>
  );
};
