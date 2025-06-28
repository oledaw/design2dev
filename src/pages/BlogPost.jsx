import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Button from "../components/Button";
import { useScrollBehavior } from "../hooks/useScrollBehavior";
import { formatDate } from "../utils/dateUtils";
import { getBlogPostRoute } from "../constants/routes";
import { APP_CONFIG } from "../constants/config";
import {
  BlogPostContainer,
  StickyBackButtonContainer,
  StickyBackButtonWrapper,
  BlogPostHeader,
  BackButton,
  PostHeroImage,
  PostHeaderContent,
  PostCategory,
  PostTitle,
  PostMeta,
  PostAuthor,
  PostDate,
  PostReadTime,
  PostContent,
  PostBody,
  RelatedPosts,
  RelatedPostsTitle,
  RelatedPostsGrid,
  RelatedPostCard,
  RelatedPostImage,
  RelatedPostContent,
  RelatedPostTitle,
  RelatedPostExcerpt,
  LoadingSpinner,
  NotFoundContainer,
} from "./BlogPost.styles";
import { getPostById, blogPosts } from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isBackButtonVisible } = useScrollBehavior();

  useEffect(() => {
    const foundPost = getPostById(id);

    if (foundPost) {
      setPost(foundPost);

      // Get related posts from the same category, excluding current post
      const related = blogPosts
        .filter(
          (p) => p.category === foundPost.category && p.id !== foundPost.id,
        )
        .slice(0, APP_CONFIG.RELATED_POSTS_LIMIT);
      setRelatedPosts(related);
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, APP_CONFIG.LOADING_DELAY);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate(getBlogPostRoute(""));
  };

  const handleRelatedPostClick = (postId) => {
    navigate(getBlogPostRoute(postId));
  };

  if (loading) {
    return (
      <PageLayout>
        <BlogPostContainer>
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Loading article...</p>
          </LoadingSpinner>
        </BlogPostContainer>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout>
        <BlogPostContainer>
          <NotFoundContainer>
            <h2>Article Not Found</h2>
            <p>
              The article you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <Button onClick={handleBackClick} type="primary" size="medium">
              Back to Blog
            </Button>
          </NotFoundContainer>
        </BlogPostContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <BlogPostContainer>
        <StickyBackButtonContainer $isVisible={isBackButtonVisible}>
          <StickyBackButtonWrapper>
            <BackButton onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Blog
            </BackButton>
          </StickyBackButtonWrapper>
        </StickyBackButtonContainer>

        <BlogPostHeader>
          <PostHeroImage src={post.coverImage} alt={post.title} />

          <PostHeaderContent>
            <PostCategory>{post.category}</PostCategory>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <PostAuthor>By {post.author}</PostAuthor>
              <PostDate>{formatDate(post.publishedAt)}</PostDate>
              <PostReadTime>{post.readTime}</PostReadTime>
            </PostMeta>
          </PostHeaderContent>
        </BlogPostHeader>

        <PostContent>
          <PostBody dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContent>

        {relatedPosts.length > 0 && (
          <RelatedPosts>
            <RelatedPostsTitle>Related Articles</RelatedPostsTitle>
            <RelatedPostsGrid>
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard
                  key={relatedPost.id}
                  onClick={() => handleRelatedPostClick(relatedPost.id)}
                >
                  <RelatedPostImage
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                  />
                  <RelatedPostContent>
                    <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                    <RelatedPostExcerpt>
                      {relatedPost.excerpt}
                    </RelatedPostExcerpt>
                  </RelatedPostContent>
                </RelatedPostCard>
              ))}
            </RelatedPostsGrid>
          </RelatedPosts>
        )}
      </BlogPostContainer>
    </PageLayout>
  );
};

export default BlogPost;
