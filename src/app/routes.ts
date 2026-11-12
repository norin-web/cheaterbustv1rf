import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// The reference is a one-page site: support, FAQ and contact live on Home
// (anchors #faq, #contact). /support, /contact and /feedback land there too.
export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "support", Component: Home },
        { path: "contact", Component: Home },
        { path: "feedback", Component: Home },
        { path: "terms", Component: Terms },
        { path: "privacy", Component: Privacy },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
