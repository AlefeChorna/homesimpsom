import React from 'react';
import { StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import { 
  Container,
  LogoContainer,
  Logo, 
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
  showLogo,
  showBackButton,
  onBack,
  showSearchButton,
  onSearch,
  showDeleteButton,
  onDelete,
  showAccountButton,
  onAccount
}) => {
  const renderLogo = () => {
    if (!showLogo) return showBackButton ? null : <EmptyContainer />;

    return (
      <LogoContainer onPress={onBack}>
        <Icon name="car-brake-hold" color={colors.white} size={29} />
        <Logo  />
      </LogoContainer>
    );
  }

  const renderBackButton = () => {
    if (!showBackButton) return null;

    return (
      <ButtonContainer onPress={onBack}>
        <Icon name="arrow-left" color={colors.white} size={25} />
      </ButtonContainer>
    );
  }

  const renderSearchButton = () => {
    if (!showSearchButton) return <EmptyContainer />;

    const width = (showDeleteButton || showAccountButton) ? 35 : 50;

    return (
      <ButtonContainer width={width}>
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
      >
        <Icon name="delete" color={colors.white} size={23} />
      </ButtonContainer>
    );
  }

  const renderAccountButton = () => {
    if (!showAccountButton) return null;

    return (
      <ButtonContainer onPress={onAccount}>
        <Icon name="alpha-a-circle" color={colors.white} size={27} />
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
        {renderLogo()}
        {renderBackButton()}

        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>

        {renderSearchButton()}
        {renderDeleteButton()}
        {renderAccountButton()}
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
  showLogo: false,
  showBackButton: false,
  showSearchButton: false,
  showDeleteButton: false,
  showAccountButton: false,
}

Header.propTypes = {
  title: PropTypes.string,
  showLogo: PropTypes.bool,
  showBackButton: PropTypes.bool,
  showSearchButton: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  showAccountButton: PropTypes.bool,
  onBack: PropTypes.func,
  onSearch: PropTypes.func,
  onDelete: PropTypes.func,
  onAccount: PropTypes.func
}

export default Header;
