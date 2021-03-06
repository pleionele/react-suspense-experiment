import React from "react";
import ReactDOM from "react-dom";


const Lesson = React.lazy(() => import(`./app`));
function App() {
  return (
    <React.Suspense fallback="Loading App...">
      <Lesson />
    </React.Suspense>
  );
}

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.createRoot(rootElement).render(<App />); // Concurrent Mode
