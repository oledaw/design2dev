import React from 'react';
import PropTypes from "prop-types";
import { useState } from "react";
import Link from "./Link";
import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  LinkColumn,
  ColumnTitle,
  NewsletterColumn,
  NewsletterForm,
  EmailInputWrapper,
  InputContainer,
  InputBackground,
  EmailInput,
  SubmitButton,
  Toast,
  FooterBottom,
  Logo,
  Copyright,
  CopyrightText,
} from "./FooterBig.styles";

const FOOTER_LINKS = {
  company: [
    { id: 1, label: "About Us", href: "#about" },
    { id: 2, label: "Blog", href: "#blog" },
    { id: 3, label: "Careers", href: "#careers" },
    { id: 4, label: "Contact Us", href: "#contact" }
  ],
  help: [
    { id: 1, label: "Help Center", href: "#help" },
    { id: 2, label: "Safety Center", href: "#safety" },
    { id: 3, label: "Community Guidelines", href: "#guidelines" }
  ]
};

export const FooterBig = ({
  text = "Copyright © 2020 Landify UI Kit.",
}) => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setEmail("");
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <LinkColumn>
            <ColumnTitle>Company</ColumnTitle>
            {FOOTER_LINKS.company.map((link) => (
                <Link key={link.id} href={link.href} variant="light">{link.label}</Link>
            ))}
          </LinkColumn>
          <LinkColumn>
            <ColumnTitle>Help</ColumnTitle>
            {FOOTER_LINKS.help.map((link) => (
                <Link key={link.id} href={link.href} variant="light">{link.label}</Link>
            ))}
          </LinkColumn>
          
          <NewsletterColumn>
            <ColumnTitle>Stay up to date</ColumnTitle>
            <NewsletterForm onSubmit={handleSubmit}>
              <EmailInputWrapper>
                <InputContainer>
                  <InputBackground />
                  <EmailInput
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Your email address"
                  />
                  <SubmitButton type="submit" aria-label="Subscribe">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path d="M2.5 10h15M12.5 5l5 5-5 5" stroke="#4caf4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </SubmitButton>
                </InputContainer>
              </EmailInputWrapper>
              {showToast && <Toast>Thank you for subscribing!</Toast>}
            </NewsletterForm>
          </NewsletterColumn>
        </FooterLinks>

        <FooterBottom>
          <Logo>
          <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#fff"/>
<path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#fff"/>
<path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F"/>
<path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#4CAF4F"/>
<path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#4CAF4F"/>
<path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F"/>
</svg>

          </Logo>
          <Copyright>
            <CopyrightText>{text} All rights reserved</CopyrightText>
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

FooterBig.propTypes = {
  text: PropTypes.string,
};

export default FooterBig;