import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 32px 16px;
    gap: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

export const Title = styled.h2`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-2-font-family);
  font-size: var(--heading-headline-2-font-size);
  font-weight: var(--heading-headline-2-font-weight);
  line-height: var(--heading-headline-2-line-height);
  margin: 0;
`;

export const Description = styled.p`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-2-font-family);
  font-size: var(--body-regular-body-2-font-size);
  font-weight: var(--body-regular-body-2-font-weight);
  line-height: var(--body-regular-body-2-line-height);
  margin: 0;
  max-width: 600px;
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const LogoCarouselContainer = styled.div`
  width: 100%;
  max-width: 740px;
  overflow: hidden;
  margin: 0 auto;
`;

export const LogoCarousel = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scrollAnimation} 20s linear infinite;
  gap: 16px;
  padding-bottom: 10px;

  &:hover {
    animation-play-state: paused;
  }
`;

export const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;