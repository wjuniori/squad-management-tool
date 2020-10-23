import React from 'react';
import {
  CardWrapper,
  CardDot,
  CardDotEmphasis,
  CardTitle,
  CardBody,
} from './Card.styles';

interface CardProps {
  title: string;
  playerInitials: string;
  percentage: number;
  emphasis?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  playerInitials,
  percentage,
  emphasis,
}) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    {emphasis ? (
      <CardBody>
        <CardDotEmphasis>
          <CardDot>{playerInitials}</CardDot>
        </CardDotEmphasis>
        <h2>{`${percentage}%`}</h2>
      </CardBody>
    ) : (
      <CardBody>
        <CardDot>{playerInitials}</CardDot>
        <h2>{`${percentage}%`}</h2>
      </CardBody>
    )}
  </CardWrapper>
);

Card.defaultProps = {
  emphasis: false,
};

export default Card;
