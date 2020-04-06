import React from 'react';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import NounForm from './NounForm';

const SaladBowl = () => {
  const { room } = useParams();

  return (
    <Container>
      <Row>Room: {room}</Row>
      <Row>
        <NounForm />
      </Row>
    </Container>
  );
};

export default SaladBowl;
