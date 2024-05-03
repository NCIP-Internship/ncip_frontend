import Example from "@/components/data-viz/example";
import PublicPage from "../pages/Public";
import RootAuth from "@/pages/auth/root-auth";
import SignUpAuth from "@/pages/auth/signup-auth";
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
    path: "/auth",
    element: <RootAuth />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUpAuth />,
      },
    ],
  },
];
