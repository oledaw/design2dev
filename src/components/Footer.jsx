import React from 'react';
import Button from "./Button";
import { FooterBig } from "./FooterBig";
import {
  FooterContainer,
  CtaSection,
  CtaText,
  ButtonWrapper,
} from "./Footer.styles";

const FOOTER_CONTENT = {
  ctaText: "Pellentesque suscipit fringilla libero eu.",
  buttonText: "Get a Demo",
  copyright: "Copyright © 2020 Nexcent ltd."
};

export const Footer = () => {
  const handleDemoClick = () => {
    console.log("Register button clicked");
  };

  return (
    <FooterContainer>
      <CtaSection>
        <CtaText>
          {FOOTER_CONTENT.ctaText}
        </CtaText>

        <ButtonWrapper>
          <Button 
            onClick={handleDemoClick}
            type="primary"
            size="medium"
          >
            {FOOTER_CONTENT.buttonText}
          </Button>
        </ButtonWrapper>
      </CtaSection>

      <FooterBig
        text={FOOTER_CONTENT.copyright}
      />
    </FooterContainer>
  );
};

export default Footer;
