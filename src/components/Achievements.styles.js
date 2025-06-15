import styled from "styled-components";

export const AchievementsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  padding: 64px 5vw;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    padding: 48px 4vw;
  }
  @media (max-width: 600px) {
    padding: 32px 2vw;
  }
`;

export const AchievementsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 540px;
  min-width: 260px;

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 600px;
    align-items: center;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #18191f;
  width: 408px;

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 500px;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    max-width: 90vw;
  }
`;

export const TitleText = styled.span`
  color: #4d4d4d;
`;

export const TitleHighlight = styled.span`
  color: #4caf4f;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #595959;
  font-family: Inter, sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 1100px) {
    text-align: center;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 56px;
  width: 100%;

  @media (max-width: 900px) {
    gap: 32px 24px;
    justify-items: center;
  }
  @media (max-width: 600px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
  padding: 18px 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 250px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 14px 12px;
  }
`;

export const StatIcon = styled.img`
  height: 48px;
  width: 48px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    height: 36px;
    width: 36px;
  }
`;

export const StatDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const StatNumber = styled.div`
  color: #18191f;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const StatLabel = styled.div`
  color: #595959;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;