import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import { formatDate } from "../utils/dateUtils";
import { getBlogPostRoute } from "../constants/routes";
import { APP_CONFIG, SCROLL_CONFIG } from "../constants/config";
import {
  BlogContainer,
  BlogHeader,
  BlogTitle,
  BlogSubtitle,
  BlogContent,
  FiltersContainer,
  CategoryFilter,
  CategoryButton,
  PostsGrid,
  PostCard,
  PostImageContainer,
  PostImage,
  PostContent,
  PostTitle,
  PostExcerpt,
  PostMeta,
  PostAuthor,
  PostDate,
  PostReadTime,
  PostCategory,
  PaginationContainer,
  PaginationButton,
  PaginationInfo,
  LoadingSpinner,
  EmptyState,
} from "./Blog.styles";
import {
  getPostsPerPage,
  getTotalPages,
  getPostsByCategory,
  getCategories,
} from "../data/blogData";

const Blog = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  // Get current page and category from URL params
  const currentPage = parseInt(searchParams.get("page") || "1");
  const selectedCategory = searchParams.get("category") || "";

  // Filter posts by category
  const filteredPosts = getPostsByCategory(selectedCategory);

  // Pagination
  const currentPosts = getPostsPerPage(
    filteredPosts,
    currentPage,
    APP_CONFIG.POSTS_PER_PAGE,
  );
  const totalPages = getTotalPages(filteredPosts, APP_CONFIG.POSTS_PER_PAGE);

  // Get all categories for filter
  const categories = getCategories();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, APP_CONFIG.LOADING_DELAY);

    return () => clearTimeout(timer);
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams();
    if (category) newParams.set("category", category);
    newParams.set("page", "1"); // Reset to first page when changing category
    setSearchParams(newParams);
  };

  const handlePageChange = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    setSearchParams(newParams);

    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: SCROLL_CONFIG.SCROLL_BEHAVIOR });
  };

  const handlePostClick = (postId) => {
    navigate(getBlogPostRoute(postId));
  };

  if (loading) {
    return (
      <PageLayout>
        <BlogContainer>
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Loading posts...</p>
          </LoadingSpinner>
        </BlogContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <BlogContainer>
        <BlogHeader>
          <BlogTitle>Community Insights</BlogTitle>
          <BlogSubtitle>
            Discover the latest trends, strategies, and insights in community
            building and management from industry experts and practitioners.
          </BlogSubtitle>
        </BlogHeader>

        <BlogContent>
          <FiltersContainer>
            <CategoryFilter>
              <CategoryButton
                active={!selectedCategory}
                onClick={() => handleCategoryChange("")}
              >
                All Posts
              </CategoryButton>
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  active={selectedCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </CategoryButton>
              ))}
            </CategoryFilter>
          </FiltersContainer>

          {currentPosts.length === 0 ? (
            <EmptyState>
              <h3>No posts found</h3>
              <p>
                Try adjusting your filters or check back later for new content.
              </p>
            </EmptyState>
          ) : (
            <>
              <PostsGrid>
                {currentPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    onClick={() => handlePostClick(post.id)}
                  >
                    <PostImageContainer>
                      <PostImage
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                      />
                      <PostCategory>{post.category}</PostCategory>
                    </PostImageContainer>
                    <PostContent>
                      <PostTitle>{post.title}</PostTitle>
                      <PostExcerpt>{post.excerpt}</PostExcerpt>
                      <PostMeta>
                        <PostAuthor>By {post.author}</PostAuthor>
                        <PostDate>{formatDate(post.publishedAt)}</PostDate>
                        <PostReadTime>{post.readTime}</PostReadTime>
                      </PostMeta>
                    </PostContent>
                  </PostCard>
                ))}
              </PostsGrid>

              {totalPages > 1 && (
                <PaginationContainer>
                  <PaginationButton
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </PaginationButton>

                  <PaginationInfo>
                    Page {currentPage} of {totalPages}
                  </PaginationInfo>

                  <PaginationButton
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </PaginationButton>
                </PaginationContainer>
              )}
            </>
          )}
        </BlogContent>
      </BlogContainer>
    </PageLayout>
  );
};

export default Blog;
