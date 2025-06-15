import React from 'react';
/** @jsxImportSource @emotion/react */
import {
  HeroSection,
  HeroContentWrapper,
  HeroTextSection,
  HeroTitleWrapper,
  HeroTitle,
  HeroTitleMain,
  HeroTitleAccent,
  HeroSubtitle,
  HeroImage,
} from "./HeroSection.styles";
import Button from "./Button";

const HERO_CONTENT = {
  title: {
    main: "Lessons and insights",
    accent: " from 8 years"
  },
  subtitle: "Where to grow your business as a photographer: site or social media?",
  buttonText: "Register"
};

function HeroSectionComponent() {
  const handleRegister = () => {
    console.log("Register button clicked");
  };

  return (
    <HeroSection>
      <HeroContentWrapper>
        <HeroTextSection>
          <HeroTitleWrapper>
            <HeroTitle>
              <HeroTitleMain>{HERO_CONTENT.title.main}</HeroTitleMain>
              <HeroTitleAccent>{HERO_CONTENT.title.accent}</HeroTitleAccent>
            </HeroTitle>
            <HeroSubtitle>
              {HERO_CONTENT.subtitle}
            </HeroSubtitle>
          </HeroTitleWrapper>
          <Button 
            onClick={handleRegister}
            type="primary"
            size="large"
          >
            {HERO_CONTENT.buttonText}
          </Button>
        </HeroTextSection>
        <HeroImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c8d1753826deabdc1448aace29021ccbe4b0195?placeholderIfAbsent=true"
          alt="Illustration"
          loading="lazy"
        />
      </HeroContentWrapper>
    </HeroSection>
  );
}

export default HeroSectionComponent;
