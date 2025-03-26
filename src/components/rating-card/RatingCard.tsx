import React, { useState } from "react";
import { Card } from "../shared";
import { ThankYouCard } from "../thank-you-card/ThankYouCard";
import {
  StarContainer,
  Title,
  Description,
  RatingContainer,
  RatingButton,
  SubmitButton,
} from "./styles";

const RatingCard: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <ThankYouCard rating={rating} />;
  }

  return (
    <Card>
      <StarContainer>
        <img src="/icon-star.svg" alt="Star" />
      </StarContainer>
      <Title>How did we do?</Title>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <RatingContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingButton
            key={value}
            selected={rating === value}
            onClick={() => setRating(value)}
          >
            {value}
          </RatingButton>
        ))}
      </RatingContainer>
      <SubmitButton onClick={handleSubmit} disabled={rating === null}>
        SUBMIT
      </SubmitButton>
    </Card>
  );
};

export default RatingCard;
