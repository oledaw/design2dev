import React from 'react';
import logo from "../images/logo.svg";
import {
  Section,
  ContentWrapper,
  Title,
  Description,
  LogoCarouselContainer,
  LogoCarousel,
  LogoItem,
  LogoImage
} from "./OurClients.styles";

const CLIENT_CONTENT = {
  title: "Our Clients",
  description: "We have been working with some Fortune 500+ clients"
};

const LOGO_COUNT = 5; // Number of unique logos

export const OurClients = () => {
  // Create array of logos and duplicate for seamless carousel
  const logos = Array(LOGO_COUNT).fill(logo);
  const carouselLogos = [...logos, ...logos];

  return (
    <Section>
      <ContentWrapper>
        <Title>{CLIENT_CONTENT.title}</Title>
        <Description>{CLIENT_CONTENT.description}</Description>
      </ContentWrapper>

      <LogoCarouselContainer>
        <LogoCarousel>
          {carouselLogos.map((src, index) => (
            <LogoItem key={`logo-${index}`}>
              <LogoImage 
                src={src} 
                alt="Client company logo" 
                loading="lazy"
              />
            </LogoItem>
          ))}
        </LogoCarousel>
      </LogoCarouselContainer>
    </Section>
  );
};

export default OurClients;