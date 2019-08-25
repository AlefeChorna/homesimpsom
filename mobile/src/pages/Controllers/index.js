import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TabBottomItem from '../../components/TabBottomItem';
import Header from '../../components/Header';
import Add from '../../components/FloatingButton/Add';

import { Container } from './styles';

const Controllers = () => (
  <Container>
    <Header 
      showLogo 
      showSearchButton
      showAccountButton />

    <Add onPress={() => {}} />
  </Container>
);

Controllers.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="file-tree" color={tintColor} size={23} />,
  tabBarLabel: ({ tintColor }) => <TabBottomItem textColor={tintColor} text="Controladores" />
}

export default Controllers;
