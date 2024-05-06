import Example from "@/components/data-viz/example";
import ApplicationProcess from "@/pages/sub/coc/ApplicationProcess";
import Requirements from "@/pages/sub/coc/Requirements";

export const publicRoutes = [
  {
    path: "/coc",
    children: [
      {
        path: "application-process",
        element: <ApplicationProcess />,
      },
      { path: "requirements", element: <Requirements /> },
    ],
  },
  {
    path: "test/data-viz",
    element: <Example />,
  },
];
