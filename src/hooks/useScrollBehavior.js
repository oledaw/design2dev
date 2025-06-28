import { useState, useEffect } from "react";
import { SCROLL_CONFIG } from "../constants/config";

/**
 * Custom hook to handle scroll behavior for navigation and back button visibility
 * @returns {Object} Object containing isBackButtonVisible and lastScrollY
 */
export const useScrollBehavior = () => {
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Synchronize with Navigation behavior:
      // - Navigation hides when scrolling down after threshold
      // - Navigation shows when scrolling up or at top
      // - Back button should be visible when navigation is hidden
      // - Back button should be hidden when navigation is visible
      
      if (currentScrollY > lastScrollY && currentScrollY > SCROLL_CONFIG.NAVIGATION_HIDE_THRESHOLD) {
        // Scrolling down and past threshold - Navigation will hide, show back button
        setIsBackButtonVisible(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= SCROLL_CONFIG.NAVIGATION_HIDE_THRESHOLD) {
        // Scrolling up or near top - Navigation will show, hide back button
        setIsBackButtonVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { isBackButtonVisible, lastScrollY };
}; 