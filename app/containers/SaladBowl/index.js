import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

const SaladBowl = () => {
  const { room } = useParams();

  return <Container>Room id: {room}</Container>;
};

export default SaladBowl;
