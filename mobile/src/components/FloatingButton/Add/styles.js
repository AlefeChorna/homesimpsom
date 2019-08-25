import styled from 'styled-components/native';

import { colors } from '../../../styles';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 72;
  height: 75;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})`
  background-color: ${colors.themeColor};
  width: 52;
  height: 52;
  border-radius: 26;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
