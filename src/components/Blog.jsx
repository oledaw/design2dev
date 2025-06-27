import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
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
  const postsPerPage = 20;
  const currentPosts = getPostsPerPage(
    filteredPosts,
    currentPage,
    postsPerPage,
  );
  const totalPages = getTotalPages(filteredPosts, postsPerPage);

  // Get all categories for filter
  const categories = getCategories();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePostClick = (postId) => {
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
        <BlogContainer>
          <LoadingSpinner>
            <div className="spinner"></div>
            <p>Loading posts...</p>
          </LoadingSpinner>
        </BlogContainer>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
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
      <Footer />
    </>
  );
};

export default Blog;
