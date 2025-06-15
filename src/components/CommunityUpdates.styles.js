import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding: 48px 12px;
    gap: 24px;
  }

  @media (max-width: 600px) {
    padding: 32px 4vw;
    gap: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
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
  max-width: 628px;
`;

export const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 0;
  min-width: 260px;
  max-width: 368px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 286px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;

  @media (max-width: 600px) {
    height: 180px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: var(--neutralsilver);
  border-radius: 8px;
  box-shadow: var(--shadow-8px);
  margin-top: -96px;
  padding: 16px;
  position: relative;
  width: 90%;
  max-width: 340px;

  @media (max-width: 600px) {
    margin-top: -60px;
    width: 98%;
    max-width: 98vw;
    padding: 12px;
  }
`;

export const CardTitle = styled.h3`
  color: var(--neutralgrey);
  font-family: var(--heading-headline-4-font-family);
  font-size: var(--heading-headline-4-font-size);
  font-weight: var(--heading-headline-4-font-weight);
  line-height: var(--heading-headline-4-line-height);
  margin: 0;
  text-align: center;
  max-width: 285px;
`;