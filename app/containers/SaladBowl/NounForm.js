import React, { useState } from 'react';

import { appendNouns } from 'redux/actions/root';

import { css } from 'emotion';
import { Container, Col, Row, Input, Button, Form } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

const NounForm = () => {
  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);

  // Local state for input
  // TODO: the initial states on these nouns seems wrong
  const [noun1, onNoun1Update] = useState(rootState.root.nouns[0]);
  const [noun2, onNoun2Update] = useState(rootState.root.nouns[1]);
  const [noun3, onNoun3Update] = useState(rootState.root.nouns[2]);
  const [noun4, onNoun4Update] = useState(rootState.root.nouns[3]);
  const [noun5, onNoun5Update] = useState(rootState.root.nouns[4]);

  const onClick = () => {
    const nouns = [noun1, noun2, noun3, noun4, noun5];
    console.log('nouns submitted: ' + nouns);
    // TODO: I would like to link the nouns submitted by a player to either their userId or the roomId
    dispatch(appendNouns(nouns));
  };
  return (
    <Container>
      <Form>
        <Row className={styles.item}>
          <h4>
            Please contribute 5 nouns (a person, place, or thing) to the salad
            bowl:
          </h4>
        </Row>
        <Row className={styles.item}>
          <Input
            type="text"
            value={noun1}
            name="noun1_input"
            placeholder="Baby Yoda"
            onChange={(e) => onNoun1Update(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Input
            type="text"
            value={noun2}
            name="noun2_input"
            placeholder="socks"
            onChange={(e) => onNoun2Update(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Input
            type="text"
            value={noun3}
            name="noun3_input"
            placeholder="walrus"
            onChange={(e) => onNoun3Update(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Input
            type="text"
            value={noun4}
            name="noun4_input"
            placeholder="Atlantis"
            onChange={(e) => onNoun4Update(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Input
            type="text"
            value={noun5}
            name="noun5_input"
            placeholder="baby carrot"
            onChange={(e) => onNoun5Update(e.target.value)}
          />
        </Row>
        <Row className={styles.item}>
          <Col>
            <Button
              disabled={!noun1 || !noun2 || !noun3 || !noun4 || !noun5}
              size="100px"
              color="primary"
              onClick={onClick}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const styles = {
  container: css({
    textAlign: 'center',
  }),
  item: css({
    marginTop: '10px',
  }),
};

export default NounForm;
