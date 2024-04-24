import Example from "@/components/data-viz/example";
import PublicPage from "../pages/Public";

export const publicRoutes = [
  {
    path: "/public",
    element: <PublicPage />,
  },
  {
    path: "test/data-viz",
    element: <Example />,
  },
];
