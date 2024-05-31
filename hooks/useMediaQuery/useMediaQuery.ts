import { useState, useEffect } from 'react';

const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueries = window.matchMedia(mediaQuery);
    setMatches(mediaQueries.matches);

    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueries.addEventListener('change', updateMatches);
    return () => {
      mediaQueries.removeEventListener('change', updateMatches);
    };
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
