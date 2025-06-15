import React from 'react';
import Button from "./Button";
import backgroundComplete from "../images/rafiki.png";
import {
  Section,
  Container,
  ImageContainer,
  ContentContainer,
  Description,
  Title
} from "./Unlock.styles";

const FEATURE_CONTENT = {
  title: "The unseen of spending three years at Pixelgrade",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  buttonText: "Learn More"
};

export const Unlock = () => {
  const handleLearnMore = () => {
    console.log("Learn More button clicked");
  };

  return (
    <Section>
      <Container>
        <ImageContainer>
          <img 
            src={backgroundComplete} 
            alt="Mobile Login Rafiki" 
            loading="lazy"
          />
        </ImageContainer>

        <ContentContainer>
          <Title>{FEATURE_CONTENT.title}</Title>
          <Description>{FEATURE_CONTENT.description}</Description>
          <Button 
            onClick={handleLearnMore}
            type="primary"
            size="medium"
          >
            {FEATURE_CONTENT.buttonText}
          </Button>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default Unlock;