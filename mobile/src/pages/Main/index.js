import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import TabBottomItem from '../../components/TabBottomItem';

import { Container } from './styles';

const Main = () => (
  <Container>
    <Header />
  </Container>
);

Main.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={24} />,
  tabBarLabel: ({ tintColor }) => <TabBottomItem textColor={tintColor} text="Rotinas" />
}

export default Main;
