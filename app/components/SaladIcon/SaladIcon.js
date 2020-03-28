import React from 'react';
import { css } from 'emotion';
import SpyIconImage from 'images/salad.png';

const SaladIcon = (props) => (
  <img src={SpyIconImage} className={`${styles.saladIcon} ${props.className}`} style={props.style} width={20} alt="Salad icon" />
);

export default SaladIcon;

const styles = {
  saladIcon: css({
    marginRight: 5,
  }),
};
