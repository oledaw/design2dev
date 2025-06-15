import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const CtaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--neutralsilver);
  gap: 32px;
  padding: 32px 20px;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
`;

export const CtaText = styled.h2`
  color: var(--neutralblack);
  font-family: var(--heading-headline-1-font-family);
  font-size: var(--heading-headline-1-font-size);
  font-style: var(--heading-headline-1-font-style);
  font-weight: var(--heading-headline-1-font-weight);
  letter-spacing: var(--heading-headline-1-letter-spacing);
  line-height: var(--heading-headline-1-line-height);
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 991px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
  }
`;