import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background: var(--neutralsilver);
  padding: 0;
  box-sizing: border-box;
`;

export const BlogHeader = styled.div`
  background: var(--neutralwhite);
  padding: 80px 0 64px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 0 48px 0;
  }
`;

export const BlogTitle = styled.h1`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-1-font-family);
  font-size: 48px;
  font-weight: var(--heading-headline-1-font-weight);
  line-height: 56px;
  margin: 0 0 16px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const BlogSubtitle = styled.p`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-1-font-family);
  font-size: var(--body-regular-body-1-font-size);
  font-weight: var(--body-regular-body-1-font-weight);
  line-height: var(--body-regular-body-1-line-height);
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BlogContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

export const FiltersContainer = styled.div`
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const CategoryButton = styled.button`
  background: ${({ active }) =>
    active ? "var(--brandprimary)" : "var(--neutralwhite)"};
  color: ${({ active }) =>
    active ? "var(--neutralwhite)" : "var(--neutraldgrey)"};
  border: 1px solid
    ${({ active }) =>
      active ? "var(--brandprimary)" : "var(--neutralgreyblue)"};
  border-radius: 24px;
  padding: 8px 20px;
  font-family: var(--body-medium-body-3-font-family);
  font-size: var(--body-medium-body-3-font-size);
  font-weight: var(--body-medium-body-3-font-weight);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ active }) =>
      active ? "var(--brandprimary-dark)" : "var(--neutralsilver)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    font-size: 12px;
  }
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const PostCard = styled.div`
  background: var(--neutralwhite);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-2px);
  cursor: pointer;
  transition: all 0.3s ease;
  height: fit-content;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-8px);
  }
`;

export const PostImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PostCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PostCategory = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--brandprimary);
  color: var(--neutralwhite);
  padding: 4px 12px;
  border-radius: 12px;
  font-family: var(--body-medium-body-4-font-family);
  font-size: var(--body-medium-body-4-font-size);
  font-weight: var(--body-medium-body-4-font-weight);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PostContent = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const PostTitle = styled.h3`
  color: var(--neutraldgrey);
  font-family: var(--heading-headline-4-font-family);
  font-size: var(--heading-headline-4-font-size);
  font-weight: var(--heading-headline-4-font-weight);
  line-height: var(--heading-headline-4-line-height);
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PostExcerpt = styled.p`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-3-font-family);
  font-size: var(--body-regular-body-3-font-size);
  font-weight: var(--body-regular-body-3-font-weight);
  line-height: var(--body-regular-body-3-line-height);
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid var(--neutralsilver);
  padding-top: 12px;
`;

export const PostAuthor = styled.span`
  color: var(--neutraldgrey);
  font-family: var(--body-medium-body-4-font-family);
  font-size: var(--body-medium-body-4-font-size);
  font-weight: var(--body-medium-body-4-font-weight);
`;

export const PostDate = styled.span`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-4-font-family);
  font-size: var(--body-regular-body-4-font-size);
  font-weight: var(--body-regular-body-4-font-weight);
`;

export const PostReadTime = styled.span`
  color: var(--neutralgrey);
  font-family: var(--body-regular-body-4-font-family);
  font-size: var(--body-regular-body-4-font-size);
  font-weight: var(--body-regular-body-4-font-weight);
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 48px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`;

export const PaginationButton = styled.button`
  background: var(--brandprimary);
  color: var(--neutralwhite);
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-family: var(--body-medium-body-3-font-family);
  font-size: var(--body-medium-body-3-font-size);
  font-weight: var(--body-medium-body-3-font-weight);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--brandprimary-dark);
    transform: translateY(-1px);
  }

  &:disabled {
    background: var(--neutrallgrey);
    color: var(--neutralwhite);
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const PaginationInfo = styled.span`
  color: var(--neutraldgrey);
  font-family: var(--body-regular-body-3-font-family);
  font-size: var(--body-regular-body-3-font-size);
  font-weight: var(--body-regular-body-3-font-weight);
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 12px;
  }
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 16px;

  h3 {
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
    margin: 0;
  }
`;
