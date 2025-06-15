import React from 'react';
import officeIcon from "../images/office-icon.png";
import group2 from "../images/group-2.png";
import icon from "../images/icon.png";
import {
  CommunityContainer,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  CardsContainer,
  Card,
  CardHeader,
  IconContainer,
  IconBackground,
  IconImage,
  CardTitle,
  CardDescription,
} from "./Community.styles";

const COMMUNITY_CARDS = [
  {
    id: 'membership',
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: icon,
    iconAlt: 'Membership Icon'
  },
  {
    id: 'associations',
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: officeIcon,
    iconAlt: 'Office Icon'
  },
  {
    id: 'clubs',
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: group2,
    iconAlt: 'Group Icon'
  }
];

export const Community = () => {
  return (
    <CommunityContainer>
      <SectionContainer>
        <SectionTitle>
          Manage your entire community in a single system
        </SectionTitle>
        <SectionSubtitle>Who is Nextcent suitable for?</SectionSubtitle>
      </SectionContainer>
      
      <CardsContainer>
        {COMMUNITY_CARDS.map(({ id, title, description, icon, iconAlt }) => (
          <Card key={id}>
            <CardHeader>
              <IconContainer>
                <IconBackground />
                <IconImage src={icon} alt={iconAlt} />
              </IconContainer>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardDescription>{description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </CommunityContainer>
  );
};

export default Community;