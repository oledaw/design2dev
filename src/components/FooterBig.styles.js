import styled from "styled-components";

// Example, adjust according to your actual FooterBig styles:
export const FooterContainer = styled.footer`
  background-color: #263238;
  padding: 80px 0 40px;
  color: #fff;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  margin-bottom: 60px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const ColumnTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const LinkItem = styled.li`
  font-size: 16px;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 100%;

  &:hover {
    opacity: 1;
  }
`;

export const LinkItemHighlight = styled(LinkItem)`
  color: #4CAF50;
  opacity: 1;
`;

export const NewsletterColumn = styled(LinkColumn)`
  max-width: none;
  width: 100%;
`;

export const NewsletterForm = styled.form`
  width: 100%;
`;

export const EmailInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InputBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 16px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  outline: none;
  z-index: 1;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #4CAF50;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  animation: slideIn 0.3s ease;
  z-index: 1000;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;