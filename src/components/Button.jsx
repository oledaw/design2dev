import React from 'react';
import PropTypes from "prop-types";
import { ButtonContainer, ButtonLabel } from "./Button.styles";

const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
};

const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const BUTTON_STATES = {
  DEFAULT: 'default',
  HOVER: 'hover',
  ACTIVE: 'active',
  DISABLED: 'disabled'
};

const Button = ({ 
  children, 
  onClick, 
  type = BUTTON_TYPES.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  state = BUTTON_STATES.DEFAULT,
  ...props 
}) => (
  <ButtonContainer 
    onClick={onClick} 
    type={type}
    size={size}
    state={state}
    {...props}
  >
    <ButtonLabel>{children}</ButtonLabel>
  </ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  state: PropTypes.oneOf(Object.values(BUTTON_STATES))
};

export default Button;
