import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GameManager from './GameManager';
import GamePlayer from './GamePlayer';
import { Row } from 'reactstrap';

const SaladBowl = () => {
  const { room } = useParams();
  const roomData = useSelector((state) => state.room);

  let gameAwareComponent = <GamePlayer />;
  if (room === roomData.id) {
    gameAwareComponent = <GameManager />;
    // Owner of the room
  }
  return (
    <Container>
      <Row>Room: {room}</Row>
      <Row>{gameAwareComponent}</Row>
    </Container>
  );
};

export default SaladBowl;
