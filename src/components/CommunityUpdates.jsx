import React from 'react';
import Button from "./Button";
import image18 from "../images/image 18.png";
import image19 from "../images/image 19.png";
import image20 from "../images/image 20.png";
import {
  Section,
  Header,
  Title,
  Description,
  CardGrid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
} from "./CommunityUpdates.styles";

const COMMUNITY_CONTENT = {
  title: "Caring is the new marketing",
  description: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more."
};

const BLOG_POSTS = [
  {
    id: 1,
    image: image18,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    button: {
      text: "More",
      type: "primary",
      size: "medium"
    }
  },
  {
    id: 2,
    image: image19,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    button: {
      text: "Register",
      type: "primary",
      size: "medium"
    }
  },
  {
    id: 3,
    image: image20,
    title: "Revamping the Membership Model with Triathlon Australia",
    button: {
      text: "Register",
      type: "primary",
      size: "medium"
    }
  }
];

export const CommunityUpdates = () => {
  const handleButtonClick = (postId) => {
    console.log(`Button clicked for post ${postId}`);
  };

  return (
    <Section>
      <Header>
        <Title>{COMMUNITY_CONTENT.title}</Title>
        <Description>{COMMUNITY_CONTENT.description}</Description>
      </Header>

      <CardGrid>
        {BLOG_POSTS.map((post) => (
          <Card key={post.id}>
            <CardImage 
              src={post.image} 
              alt={post.title}
              loading="lazy"
            />
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <Button 
                onClick={() => handleButtonClick(post.id)}
                type={post.button.type}
                size={post.button.size}
              >
                {post.button.text}
              </Button>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
};

export default CommunityUpdates;