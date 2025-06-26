import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const FAQContainer = styled.div`
  min-height: calc(100vh - 84px);
  background: #f5f7fa;
  padding: 80px 0 64px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 60px 0 48px;
  }
`;

export const FAQContent = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const PageTitle = styled.h1`
  color: #18191f;
  font-family: Inter, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px;
  text-align: center;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PageSubtitle = styled.p`
  color: #595959;
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0 0 48px;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 32px;
  }
`;

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AccordionItem = styled.div`
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e0e7ff;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #4caf4f;
  }
`;

export const AccordionHeader = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: #f8f9ff;
  }

  ${(props) =>
    props.isOpen &&
    `
    background: #f8f9ff;
    border-bottom: 1px solid #e0e7ff;
  `}

  @media (max-width: 768px) {
    padding: 20px 24px;
  }

  @media (max-width: 480px) {
    padding: 16px 20px;
  }
`;

export const AccordionTitle = styled.h3`
  color: #18191f;
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  flex: 1;
  padding-right: 16px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #4caf4f;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  ${(props) =>
    props.isOpen &&
    `
    transform: rotate(180deg);
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const AccordionContent = styled.div`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease;
`;

export const AccordionText = styled.div`
  padding: 0 32px 24px;
  color: #595959;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 0 24px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0 20px 16px;
  }
`;
