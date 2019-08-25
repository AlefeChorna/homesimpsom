import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const TabBottomItem = ({ text, textColor }) => (
  <Container>
    <Text textColor={textColor}>{text}</Text>
  </Container>
);

TabBottomItem.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
}

export default TabBottomItem;
