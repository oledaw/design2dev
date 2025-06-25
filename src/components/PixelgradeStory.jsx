import React from "react";
import Button from "./Button";
import rafikiImage from "../images/rafiki.png";
import {
  Section,
  Container,
  ImageContainer,
  ContentContainer,
  Description,
  Title,
} from "./PixelgradeStory.styles";

const PIXELGRADE_CONTENT = {
  title: "The unseen of spending three years at Pixelgrade (new section)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  buttonText: "Learn More",
};

export const PixelgradeStory = () => {
  const handleLearnMore = () => {
    console.log("Learn More button clicked");
  };

  return (
    <Section>
      <Container>
        <ContentContainer>
          <Title>{PIXELGRADE_CONTENT.title}</Title>
          <Description>{PIXELGRADE_CONTENT.description}</Description>
          <Button onClick={handleLearnMore} type="primary" size="medium">
            {PIXELGRADE_CONTENT.buttonText}
          </Button>
        </ContentContainer>

        <ImageContainer>
          <img src={rafikiImage} alt="Mobile Login Rafiki" loading="lazy" />
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default PixelgradeStory;
