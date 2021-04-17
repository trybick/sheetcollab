import { useEffect, useState } from 'react';

export const useHasWaitedForInitialLoad = (timeToWait = 400) => {
  const [hasWaited, setHasWaited] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasWaited(true), timeToWait);
    return () => clearTimeout(timeout);
  }, []);

  return { hasWaited };
};
