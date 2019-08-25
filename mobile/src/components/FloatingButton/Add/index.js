import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { colors } from '../../../styles';

import { Container, Button } from './styles';

const Add = ({ onPress }) => (
  <Container>
    <Button onPress={onPress}>
      <Icon name="plus" color={colors.white} size={21} />
    </Button>
  </Container>
);

Add.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default Add;
