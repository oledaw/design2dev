import React from 'react';
import membersIcon from "../images/Icon (3).png";
import clubsIcon from "../images/Icon (1).png";
import eventBookingsIcon from "../images/Icon (4).png";
import paymentsIcon from "../images/Icon (2).png";
import {
  AchievementsSection,
  AchievementsWrapper,
  SectionHeader,
  TitleContainer,
  Title,
  TitleText,
  TitleHighlight,
  Subtitle,
  StatsContainer,
  StatsGrid,
  StatCard,
  StatIcon,
  StatDetails,
  StatNumber,
  StatLabel,
} from "./Achievements.styles";

const ACHIEVEMENT_STATS = [
  {
    id: 'members',
    number: '2,245,341',
    label: 'Members',
    icon: membersIcon,
    iconAlt: 'Members Icon'
  },
  {
    id: 'clubs',
    number: '46,328',
    label: 'Clubs',
    icon: clubsIcon,
    iconAlt: 'Clubs Icon'
  },
  {
    id: 'event-bookings',
    number: '828,867',
    label: 'Event Bookings',
    icon: eventBookingsIcon,
    iconAlt: 'Event Bookings Icon'
  },
  {
    id: 'payments',
    number: '1,926,436',
    label: 'Payments',
    icon: paymentsIcon,
    iconAlt: 'Payments Icon'
  }
];

export const Achievements = () => (
  <AchievementsSection>
    <AchievementsWrapper>
      <SectionHeader>
        <TitleContainer>
          <Title>
            <TitleText>Helping a local </TitleText>
            <TitleHighlight>business reinvent itself</TitleHighlight>
          </Title>
        </TitleContainer>
        <Subtitle>
          We reached here with our hard work and dedication
        </Subtitle>
      </SectionHeader>
      
      <StatsContainer>
        <StatsGrid>
          {ACHIEVEMENT_STATS.map(({ id, number, label, icon, iconAlt }) => (
            <StatCard key={id}>
              <StatIcon src={icon} alt={iconAlt} />
              <StatDetails>
                <StatNumber>{number}</StatNumber>
                <StatLabel>{label}</StatLabel>
              </StatDetails>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContainer>
    </AchievementsWrapper>
  </AchievementsSection>
);

export default Achievements;