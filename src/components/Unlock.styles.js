import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 64px 0;
  background: #fff;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    padding: 48px 0;
  }
  @media (max-width: 600px) {
    padding: 32px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 0 24px;
  }
  @media (max-width: 600px) {
    padding: 0 16px;
    gap: 24px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 260px;
  max-width: 442px;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 1100px) {
    max-width: 400px;
    margin-bottom: 24px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
    margin-bottom: 16px;
    
    img {
      max-width: 90vw;
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  max-width: 600px;

  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #18191f;
  font-family: Inter, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  word-break: break-word;
  
  @media (max-width: 1100px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: #595959;
  font-family: Inter, sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;