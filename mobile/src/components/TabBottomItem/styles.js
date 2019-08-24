import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 2;
`;

export const Text = styled.Text`
  color: ${props => props.textColor};
  font-size: 11
`;
