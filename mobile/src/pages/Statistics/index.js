import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TabBottomItem from '../../components/TabBottomItem';
import Header from '../../components/Header';

import { Container } from './styles';

const Statistics = () => (
  <Container>
    <Header title="Estatísticas" />
  </Container>
);

Statistics.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="poll" color={tintColor} size={21} />,
  tabBarLabel: ({ tintColor }) => <TabBottomItem textColor={tintColor} text="Estatísticas" />
}

export default Statistics;
