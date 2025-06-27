import styled from "styled-components";

export const BlogPostContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background: var(--neutralwhite);
`;

export const BlogPostHeader = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 16px 0 16px;

  @media (max-width: 768px) {
    padding: 80px 16px 0 16px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: var(--brandprimary);
  font-family: var(--body-medium-body-3-font-family);
  font-size: var(--body-medium-body-3-font-size);
  font-weight: var(--body-medium-body-3-font-weight);
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 32px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--brandprimary-dark);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const PostHeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 8px;
  }
`;

export const PostHeaderContent = styled.div`
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const PostCategory = styled.div`
  display: inline-block;
  background: var(--brandprimary);
  color: var(--neutralwhite);
  padding: 6px 16px;
  border-radius: 16px;
  font-family: var(--body-medium-body-4-font-family);
  font-size: var(--body-medium-body-4-font-size);
  font-weight: var(--body-medium-body-4-font-weight);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
`;

export const PostTitle = styled.h1`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-2-font-family);
  font-size: var(--heading-headline-2-font-size);
  font-weight: var(--heading-headline-2-font-weight);
  line-height: var(--heading-headline-2-line-height);
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const PostAuthor = styled.span`
  color: var(--neutraldgrey);
  font-family: var(--body-medium-body-3-font-family);
  font-size: var(--body-medium-body-3-font-size);
  font-weight: var(--body-medium-body-3-font-weight);

  &:after {
    content: "•";
    margin-left: 16px;
    color: var(--neutrallgrey);

    @media (max-width: 480px) {
      margin-left: 12px;
    }
  }
`;

export const PostDate = styled.span`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-3-font-family);
  font-size: var(--body-regular-body-3-font-size);
  font-weight: var(--body-regular-body-3-font-weight);

  &:after {
    content: "•";
    margin-left: 16px;
    color: var(--neutrallgrey);

    @media (max-width: 480px) {
      margin-left: 12px;
    }
  }
`;

export const PostReadTime = styled.span`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-3-font-family);
  font-size: var(--body-regular-body-3-font-size);
  font-weight: var(--body-regular-body-3-font-weight);
`;

export const PostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px 64px 16px;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

export const PostBody = styled.div`
  color: var(--neutraldgrey);
  font-family: var(--body-regular-body-1-font-family);
  font-size: var(--body-regular-body-1-font-size);
  font-weight: var(--body-regular-body-1-font-weight);
  line-height: var(--body-regular-body-1-line-height);

  h2 {
    color: var(--neutraldgrey);
    font-family: var(--heading-headline-3-font-family);
    font-size: var(--heading-headline-3-font-size);
    font-weight: var(--heading-headline-3-font-weight);
    line-height: var(--heading-headline-3-line-height);
    margin: 40px 0 16px 0;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    color: var(--neutraldgrey);
    font-family: var(--heading-headline-4-font-family);
    font-size: var(--heading-headline-4-font-size);
    font-weight: var(--heading-headline-4-font-weight);
    line-height: var(--heading-headline-4-line-height);
    margin: 32px 0 12px 0;
  }

  p {
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin: 20px 0;
    padding-left: 24px;

    li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  strong {
    font-weight: 600;
    color: var(--neutraldgrey);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;

    h2 {
      font-size: 24px;
      line-height: 32px;
      margin: 32px 0 12px 0;
    }

    h3 {
      font-size: 20px;
      line-height: 28px;
      margin: 24px 0 8px 0;
    }
  }
`;

export const RelatedPosts = styled.div`
  background: var(--neutralsilver);
  padding: 64px 16px;

  @media (max-width: 768px) {
    padding: 48px 16px;
  }
`;

export const RelatedPostsTitle = styled.h3`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-3-font-family);
  font-size: var(--heading-headline-3-font-size);
  font-weight: var(--heading-headline-3-font-weight);
  line-height: var(--heading-headline-3-line-height);
  text-align: center;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 24px 0;
  }
`;

export const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const RelatedPostCard = styled.div`
  background: var(--neutralwhite);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-2px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-8px);
  }
`;

export const RelatedPostImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${RelatedPostCard}:hover & {
    transform: scale(1.05);
  }
`;

export const RelatedPostContent = styled.div`
  padding: 20px;
`;

export const RelatedPostTitle = styled.h4`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-4-font-family);
  font-size: 16px;
  font-weight: var(--heading-headline-4-font-weight);
  line-height: 22px;
  margin: 0 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RelatedPostExcerpt = styled.p`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-4-font-family);
  font-size: var(--body-regular-body-4-font-size);
  font-weight: var(--body-regular-body-4-font-weight);
  line-height: var(--body-regular-body-4-line-height);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 16px;

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--neutralsilver);
    border-top: 4px solid var(--brandprimary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    color: var(--neutralgrey);
    font-family: var(--body-regular-body-2-font-family);
    font-size: var(--body-regular-body-2-font-size);
    margin: 0;
  }
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: 120px 16px;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    color: var(--neutraldgrey);
    font-family: var(--heading-headline-3-font-family);
    font-size: var(--heading-headline-3-font-size);
    font-weight: var(--heading-headline-3-font-weight);
    margin: 0 0 16px 0;
  }

  p {
    color: var(--neutralgrey);
    font-family: var(--body-regular-body-2-font-family);
    font-size: var(--body-regular-body-2-font-size);
    margin: 0 0 32px 0;
  }
`;
