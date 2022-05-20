import { lazy, Suspense } from "react";
import { Spinner } from "../../ds/components/Spinner";

const LazyHome = lazy(() => import("./Home"));

export const Home = () => (
  <Suspense fallback={<Spinner />}>
    <LazyHome />
  </Suspense>
);
