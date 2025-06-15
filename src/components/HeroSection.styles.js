import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  padding: 96px 144px;
  align-items: center;
  align-self: stretch;
  position: relative;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f7fa;

  @media (max-width: 900px) {
    padding: 32px 24px;
    gap: 32px;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    padding: 32px 24px;
    gap: 32px;
    flex-direction: column;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;


  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const HeroTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
  position: relative;

  @media (max-width: 640px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  position: relative;
`;

export const HeroTitle = styled.div`
  align-self: stretch;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 64px;
  font-weight: 600;
  line-height: 76px;
  position: relative;

  @media (max-width: 900px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const HeroTitleMain = styled.span`
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: #4d4d4d;

  @media (max-width: 900px) {
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const HeroTitleAccent = styled.span`
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: #4caf4f;

  @media (max-width: 900px) {
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.div`
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #717171;
  align-self: stretch;
  line-height: 24px;
  position: relative;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

export const HeroButton = styled.div`
  display: flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  background-color: #4caf4f;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const HeroButtonText = styled.div`
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  position: relative;
`;

export const HeroImage = styled.img`
  width: 391px;
  height: 407px;
  position: relative;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 280px;
    height: 291px;
    order: -1;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 291px;
    order: -1;
  }
`;