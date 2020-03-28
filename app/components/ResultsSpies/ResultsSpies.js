import React from 'react';
import { css } from 'emotion';
import { Row, Col } from 'reactstrap';
import SaladIcon from 'components/SaladIcon/SaladIcon';

const CogIcon = ({className, spies = [], remotePlayers = {}}) => (
  <Row className={className}>
    {spies.map((playerId) =>
      <Col key={playerId} className="text-center">
        <SaladIcon className={styles.SaladIcon} /><span>{remotePlayers && remotePlayers[playerId] ? remotePlayers[playerId].name : playerId}</span>
      </Col>
    )}
  </Row>
);

export default CogIcon;

const styles = {
  SaladIcon: css({
    marginRight: 10,
  }),
};
