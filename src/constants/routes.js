export const ROUTES = {
  HOME: "/",
  FAQ: "/faq",
  BLOG: "/blog",
  BLOG_POST: "/blog/:id",
};

export const getBlogPostRoute = (id) => `/blog/${id}`; 