import * as React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(App());

function App() {
  return <h2>Hello from React!</h2>;
}
