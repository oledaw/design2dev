import styled, { css } from "styled-components";

const getButtonTypeStyles = (type) => {
  switch (type) {
    case 'primary':
      return css`
        background: var(--brandprimary);
        color: var(--neutralwhite);
        
        &:hover {
          background: var(--brandprimary-dark);
        }
      `;
    case 'secondary':
      return css`
        background: var(--neutralwhite);
        color: var(--brandprimary);
        border: 1px solid var(--brandprimary);
        
        &:hover {
          background: var(--neutralwhite-dark);
        }
      `;
    case 'tertiary':
      return css`
        background: transparent;
        color: var(--brandprimary);
        
        &:hover {
          background: var(--neutralwhite-dark);
        }
      `;
    default:
      return '';
  }
};

const getButtonSizeStyles = (size) => {
  switch (size) {
    case 'small':
      return css`
        padding: 8px 16px;
        font-size: 0.875rem;
      `;
    case 'medium':
      return css`
        padding: 14px 32px;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        padding: 16px 40px;
        font-size: 1.125rem;
      `;
    default:
      return '';
  }
};

const getButtonStateStyles = (state) => {
  switch (state) {
    case 'disabled':
      return css`
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      `;
    case 'active':
      return css`
        transform: scale(0.98);
      `;
    default:
      return '';
  }
};

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 300px;
  
  ${({ type }) => getButtonTypeStyles(type)}
  ${({ size }) => getButtonSizeStyles(size)}
  ${({ state }) => getButtonStateStyles(state)}

  &:focus {
    outline: 2px solid var(--brandprimary);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const ButtonLabel = styled.span`
  font-family: inherit;
  white-space: nowrap;
`;