import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TabBottomItem from '../../components/TabBottomItem';

import { Container } from './styles';

const Statistics = () => <Container />;

Statistics.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="poll" color={tintColor} size={21} />,
  tabBarLabel: ({ tintColor }) => <TabBottomItem textColor={tintColor} text="Estatísticas" />
}

export default Statistics;
