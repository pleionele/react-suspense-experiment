import React from "react";
import ErrorBoundary from "./error-boundary";
const UserDetail = React.lazy(() => import("./user-detail"));
// const UserDetail = React.lazy(() => Promise.reject());

// const UserDetail = React.lazy(() =>
//   new Promise(resolve => setTimeout(
//     () => resolve({ default: () => <div>Resolved Response</div> }),
//     1000
//   ))
// )

export default function App() {
  return (
    <div>
      <h1>Testing Suspense</h1>
      <ErrorBoundary fallback="Found some errors">

        <React.Suspense fallback="Loading response ..">
          <UserDetail />
        </React.Suspense>
      </ErrorBoundary>

    </div>

  );
}
