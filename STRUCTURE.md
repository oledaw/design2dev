# Project Structure Documentation

## Overview
This React application has been refactored with a clean, scalable file structure that separates concerns and improves maintainability.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── index.js        # Component exports
│   ├── Button.jsx      # Button component
│   ├── Navigation.jsx  # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── ...            # Other UI components
├── pages/              # Route-level page components
│   ├── index.js        # Page exports
│   ├── Home.jsx        # Home page
│   ├── Blog.jsx        # Blog listing page
│   ├── BlogPost.jsx    # Individual blog post page
│   ├── FAQ.jsx         # FAQ page
│   └── *.styles.js     # Styled-components for pages
├── layouts/            # Layout components
│   └── PageLayout.jsx  # Common page layout wrapper
├── hooks/              # Custom React hooks
│   └── useScrollBehavior.js
├── utils/              # Utility functions
│   └── dateUtils.js    # Date formatting utilities
├── constants/          # Application constants
│   ├── routes.js       # Route definitions
│   └── config.js       # App configuration
├── data/               # Static data and mock APIs
│   └── blogData.js     # Blog post data
├── images/             # Static images and assets
└── App.js              # Main application component
```

## Key Improvements

### 1. **Separation of Pages and Components**
- **Pages** (`src/pages/`): Route-level components that represent full pages
- **Components** (`src/components/`): Reusable UI components used across pages

### 2. **Layout System**
- **PageLayout** (`src/layouts/PageLayout.jsx`): Common wrapper for all pages that includes Navigation and Footer
- Reduces code duplication across pages
- Centralizes layout logic

### 3. **Custom Hooks**
- **useScrollBehavior** (`src/hooks/useScrollBehavior.js`): Handles scroll behavior for navigation and back button visibility
- Reusable logic extracted from components

### 4. **Utility Functions**
- **dateUtils** (`src/utils/dateUtils.js`): Centralized date formatting functions
- Eliminates duplicate code across components

### 5. **Constants and Configuration**
- **routes.js** (`src/constants/routes.js`): Centralized route definitions
- **config.js** (`src/constants/config.js`): Application-wide configuration values
- Makes the app more maintainable and configurable

### 6. **Index Files**
- **Barrel exports** in `components/index.js` and `pages/index.js`
- Cleaner imports: `import { Home, Blog } from './pages'`

## Benefits

1. **Better Organization**: Clear separation between pages, components, and utilities
2. **Reduced Duplication**: Common layout and utilities are shared
3. **Improved Maintainability**: Changes to layout or utilities affect all pages automatically
4. **Scalability**: Easy to add new pages, components, or features
5. **Type Safety**: Better structure for adding TypeScript in the future
6. **Testing**: Easier to test individual components and utilities

## Usage Examples

### Importing Pages
```javascript
import { Home, Blog, FAQ } from './pages';
```

### Importing Components
```javascript
import { Navigation, Footer, Button } from './components';
```

### Using Layout
```javascript
import PageLayout from './layouts/PageLayout';

const MyPage = () => (
  <PageLayout>
    <MyContent />
  </PageLayout>
);
```

### Using Utilities
```javascript
import { formatDate } from './utils/dateUtils';
import { ROUTES } from './constants/routes';
```

## Future Improvements

1. **TypeScript Migration**: Add TypeScript for better type safety
2. **Testing Structure**: Add `__tests__` folders for unit tests
3. **Storybook**: Add Storybook for component documentation
4. **State Management**: Add Redux/Zustand if needed for global state
5. **API Layer**: Add `services/` folder for API calls
6. **Error Boundaries**: Add error boundary components
7. **Loading States**: Add loading components and states 