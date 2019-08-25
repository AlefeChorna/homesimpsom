import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors } from '../../styles';

const height = 70 - getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: ${height};
  margin-top: ${getStatusBarHeight()};
  align-items: center;
  justify-content: center;
  width: ${props => props.width || 50};
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${height};
  margin-top: ${getStatusBarHeight()};
`;

export const Title = styled.Text`
  font-size: 21;
  color: ${colors.white};
  justify-content: center;
  font-weight: 800;
`;

export const EmptyContainer = styled.View`
  height: ${height};
  margin-top: ${getStatusBarHeight()};
  width: 50;
`;
