import { lazy, Suspense } from 'react';

const InstaMart = lazy(() => import('./InstaMart'));

const LazyInstaMart = () => {
  return (
    <Suspense fallback={<div>Loading InstaMart...</div>}>
      <InstaMart />
    </Suspense>
  );
};

export default LazyInstaMart;
