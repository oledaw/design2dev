import React, { useState } from "react";
import {
  FAQContainer,
  FAQContent,
  SectionTitle,
  SectionSubtitle,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent,
  AccordionText,
} from "./FAQSection.styles";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is Nextcent and how does it work?",
    answer:
      "Nextcent is a comprehensive community management platform that helps organizations manage their entire community in a single system. It provides full automation of membership renewals, payments, and engagement tracking, making it easier for membership organizations, national associations, and clubs to operate efficiently.",
  },
  {
    id: 2,
    question: "How much does Nextcent cost?",
    answer:
      "We offer flexible pricing plans to suit organizations of all sizes. Our pricing starts with a basic plan for small communities and scales up with additional features for larger organizations. Contact our sales team for a customized quote based on your specific needs and community size.",
  },
  {
    id: 3,
    question: "Can I integrate Nextcent with my existing systems?",
    answer:
      "Yes, Nextcent offers comprehensive integration capabilities with popular tools and platforms. We support integrations with payment processors, email marketing platforms, CRM systems, and more. Our API also allows for custom integrations to meet your specific requirements.",
  },
  {
    id: 4,
    question: "Is my data secure with Nextcent?",
    answer:
      "Absolutely. We take data security very seriously and implement industry-standard security measures including SSL encryption, regular security audits, and compliance with data protection regulations like GDPR. Your community data is stored on secure servers with multiple backup systems in place.",
  },
  {
    id: 5,
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including 24/7 customer service, detailed documentation, video tutorials, and onboarding assistance. Our support team is available via email, live chat, and phone to help you get the most out of the platform.",
  },
  {
    id: 6,
    question: "Can I customize the platform to match my brand?",
    answer:
      "Yes, Nextcent offers extensive customization options to match your organization's branding. You can customize colors, logos, fonts, and layout elements to create a cohesive experience that aligns with your brand identity.",
  },
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>
          Find answers to common questions about Nextcent and how it can help
          your organization
        </SectionSubtitle>

        <AccordionContainer>
          {FAQ_DATA.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionHeader
                onClick={() => toggleAccordion(item.id)}
                isOpen={openItem === item.id}
              >
                <AccordionTitle>{item.question}</AccordionTitle>
                <AccordionIcon isOpen={openItem === item.id}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionIcon>
              </AccordionHeader>
              <AccordionContent isOpen={openItem === item.id}>
                <AccordionText>{item.answer}</AccordionText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
