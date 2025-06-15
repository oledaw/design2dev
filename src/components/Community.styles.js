import styled from "styled-components";

export const CommunityContainer = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const SectionTitle = styled.h2`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-2-font-family);
  font-size: var(--heading-headline-2-font-size);
  font-style: var(--heading-headline-2-font-style);
  font-weight: var(--heading-headline-2-font-weight);
  letter-spacing: var(--heading-headline-2-letter-spacing);
  line-height: var(--heading-headline-2-line-height);
  text-align: center;
  width: 100%;
  max-width: 542px;
  margin: 0;
`;

export const SectionSubtitle = styled.p`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-2-font-family);
  font-size: var(--body-regular-body-2-font-size);
  font-style: var(--body-regular-body-2-font-style);
  font-weight: var(--body-regular-body-2-font-weight);
  letter-spacing: var(--body-regular-body-2-letter-spacing);
  line-height: var(--body-regular-body-2-line-height);
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  padding: 0 16px;

  @media (max-width: 1100px) {
    gap: 16px;
    max-width: 900px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 100%;
  }
`;

export const Card = styled.div`
  align-items: center;
  background-color: var(--neutralwhite);
  border-radius: 8px;
  box-shadow: 0px 2px 4px #abbed133;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 32px;
  width: 299px;
  min-width: 240px;
  max-width: 100%;

  @media (max-width: 600px) {
    width: 90vw;
    min-width: unset;
    padding: 20px 8px;
  }
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const IconContainer = styled.div`
  height: 56px;
  position: relative;
  width: 65px;
`;

export const IconBackground = styled.div`
  background-color: var(--tintt-5);
  border-radius: 18px 5px 10px 5px;
  height: 49px;
  left: 15px;
  position: absolute;
  top: 7px;
  transform: rotate(-180deg);
  width: 50px;
`;

export const IconImage = styled.img`
  height: 48px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
`;

export const CardTitle = styled.h3`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-3-font-family);
  font-size: var(--heading-headline-3-font-size);
  font-style: var(--heading-headline-3-font-style);
  font-weight: var(--heading-headline-3-font-weight);
  letter-spacing: var(--heading-headline-3-letter-spacing);
  line-height: var(--heading-headline-3-line-height);
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const CardDescription = styled.p`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-3-font-family);
  font-size: var(--body-regular-body-3-font-size);
  font-style: var(--body-regular-body-3-font-style);
  font-weight: var(--body-regular-body-3-font-weight);
  letter-spacing: var(--body-regular-body-3-letter-spacing);
  line-height: var(--body-regular-body-3-line-height);
  text-align: center;
  width: 100%;
  margin: 0;
`;