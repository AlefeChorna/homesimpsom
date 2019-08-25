import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { 
  Container, 
  ButtonContainer, 
  EmptyContainer,
  TitleContainer,
  Title
} from './styles';

import { colors } from '../../styles';

const headerColor = [
  colors.themeColor,
  colors.greenTeal400
];

const Header = ({
  title,
  showBackButton,
  onBack,
  showSearchButton,
  onSearch,
  showDeleteButton,
  onDelete
}) => {
  const renderBackButton = () => {
    if (!showBackButton) return <EmptyContainer />;

    return (
      <ButtonContainer onPress={onBack} onLongPress={onPress}>
        <Icon name="arrow-left" color={colors.white} size={25} />
      </ButtonContainer>
    );
  }

  const renderSearchButton = () => {
    if (!showSearchButton) return <EmptyContainer />;

    return (
      <ButtonContainer width={showDeleteButton ? 35 : 50}>
        <Icon name="magnify" color={colors.white} size={23} />
      </ButtonContainer>
    );
  }

  const renderDeleteButton = () => {
    if (!showDeleteButton) return null;

    return (
      <ButtonContainer 
        width={showSearchButton ? 35 : 50}
        onPress={onDelete} 
        onLongPress={onDelete}
      >
        <Icon name="delete" color={colors.white} size={23} />
      </ButtonContainer>
    );
  }

  return (
    <LinearGradient 
      colors={headerColor} 
      style={styles.linearGradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Container>
        {renderBackButton()}

        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>

        {renderSearchButton()}
        {renderDeleteButton()}
      </Container>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 70,
  }
});

Header.defaultProps = {
  showBackButton: false,
  showSearchButton: false,
  showDeleteButton: false
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  showSearchButton: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  onBack: PropTypes.func,
  onSearch: PropTypes.func,
  onDelete: PropTypes.func,
}

export default Header;
