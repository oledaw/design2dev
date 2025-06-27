import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Button from "./Button";
import {
  BlogPostContainer,
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

  useEffect(() => {
    const foundPost = getPostById(id);

    if (foundPost) {
      setPost(foundPost);

      // Get related posts from the same category, excluding current post
      const related = blogPosts
        .filter(
          (p) => p.category === foundPost.category && p.id !== foundPost.id,
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/blog");
  };

  const handleRelatedPostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <BlogPostContainer>
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Loading article...</p>
          </LoadingSpinner>
        </BlogPostContainer>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navigation />
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <BlogPostContainer>
        <BlogPostHeader>
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
      <Footer />
    </>
  );
};

export default BlogPost;
