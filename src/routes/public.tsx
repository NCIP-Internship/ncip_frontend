import Example from "@/components/data-viz/example";
import PublicPage from "../pages/Public";
import RootAuth from "@/pages/auth/root-auth";
import SignIn from "@/pages/auth/signin-auth";

export const publicRoutes = [
  {
    path: "/public",
    element: <PublicPage />,
  },
  {
    path: "test/data-viz",
    element: <Example />,
  },
  {
    path: "auth",
    children: [
      {
        index: true,
        element: <RootAuth />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
];
