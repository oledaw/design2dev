import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Link.styles';

const Link = ({ 
  children, 
  href, 
  highlight, 
  variant = 'dark',
  onClick,
  ...props 
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <StyledLink 
      href={href || '#'} 
      highlight={highlight}
      variant={variant}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  highlight: PropTypes.bool,
  variant: PropTypes.oneOf(['light', 'dark']),
  onClick: PropTypes.func
};

Link.defaultProps = {
  highlight: false,
  variant: 'dark'
};

export default Link; 