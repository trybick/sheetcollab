import { useEffect, useState } from 'react';

export const useHasWaitedForInitialLoad = (timeToWait = 300, loading = true) => {
  const [hasWaited, setHasWaited] = useState(false);

  useEffect(() => {
    setHasWaited(false);
    const timeout = setTimeout(() => setHasWaited(true), timeToWait);
    return () => clearTimeout(timeout);
  }, [loading]);

  return { hasWaited };
};
