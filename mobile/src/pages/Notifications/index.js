import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TabBottomItem from '../../components/TabBottomItem';

import { Container } from './styles';

const Notifications = () => <Container />;

Notifications.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="bell" color={tintColor} size={22} />,
  tabBarLabel: ({ tintColor }) => <TabBottomItem textColor={tintColor} text="Notificações" />
}

export default Notifications;
