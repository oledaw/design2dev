import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${props => {
    if (props.highlight) return '#4CAF4F';
    return props.variant === 'dark' ? '#263238' : '#FFFFFF';
  }};
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  transition: color 0.2s ease;
  cursor: pointer;
  opacity: ${props => props.variant === 'dark' ? 1 : 0.8};

  &:hover {
    color: #4CAF4F;
    opacity: 1;
  }
`;