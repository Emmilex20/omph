import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
  const location = useLocation(); // Gets the current location object from React Router

  useEffect(() => {
    // When the location (path) changes, smoothly scroll to the top of the window
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll animated
    });
  }, [location.pathname]); // Re-run this effect whenever the pathname changes
}

export default useScrollToTop;
